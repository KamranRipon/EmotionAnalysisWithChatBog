from flask import Flask, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# Create a chatbot instance
chatbot = ChatBot('LocalBot')

# Train the chatbot on English corpus data
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("chatterbot.corpus.english")

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    # Get the chatbot's response
    bot_response = chatbot.get_response(user_message)
    return jsonify({'reply': str(bot_response)})

if __name__ == '__main__':
    app.run(port=5000)