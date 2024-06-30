<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    // Get list of users for the authenticated user to chat with
    public function users()
    {
        $users = User::where('id', '!=', Auth::id())->get();
        return response()->json($users);
    }

    // Get messages between authenticated user and selected user
    public function index($userId)
    {
        $messages = Message::where(function ($query) use ($userId) {
            $query->where('from_user_id', Auth::id())->where('to_user_id', $userId);
        })->orWhere(function ($query) use ($userId) {
            $query->where('from_user_id', $userId)->where('to_user_id', Auth::id());
        })->get();

        return response()->json($messages);
    }

    // Send a message from authenticated user to another user
    public function store(Request $request)
    {
        $message = Message::create([
            'from_user_id' => Auth::id(),
            'to_user_id' => $request->to_user_id,
            'message' => $request->message,
        ]);

        broadcast(new MessageSent($message))->toOthers();

        return response()->json($message);
    }
}
