import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {serverUrl} from "../shared/constants";

const socket = io(`${serverUrl}`);

type CommentProps = {
    id: string;
};

type Comment = {
    id: string,
    videoId: string,
    content:string,
    username: string,
}

const CommentSection: React.FC<CommentProps> = ({ id }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [videoId, ] = useState<string>(id);

    useEffect(() => {
        socket.emit('joinRoom', id);

        socket.on('comments', (comments: Comment[]) => {
            setComments(comments);
        });


        // Listen for new comments from the server
        socket.on('newComment', (comment) => {
            console.log(comment);
            setComments((prevComments) => [comment, ...prevComments]);
        });

        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        return () => {
            socket.off('newComment'); // Remove the event listener when component unmounts
        };
    }, [id]);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment) {
            // Send new comment to the server
            socket.emit('newComment', { videoId, username: "meily1234", comment: newComment });

            // Clear the input field after submission
            setNewComment('');
        }
    };

    return (
        <div className="comment-section h-[100%] flex flex-col-reverse">
            <form onSubmit={handleCommentSubmit} className="">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-2 border rounded h-auto resize-none"
                />
                <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>
            <div className="comment-list flex-grow overflow-y-auto flex flex-col-reverse">
                {comments.map((comment, index) => (
                    <div key={comment.id} className="comment py-1 flex">
                        <p className="bg-blue-500 grid-flow-dense p-2 rounded-md word-wrap">
                            <p className="font-bold flex-wrap">{comment.username}</p> {comment.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
