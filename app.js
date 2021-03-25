//Require SocketIO
var socketIO = require('socket.io')

//run socket io on port 3000, allowing all connections
const io = socketIO(3000, {
	/*
	CORS policy stands for Cross-Origin Resource Sharing (policy). 
	It is the most annoying thing created by man. It keeps things secure but at the cost of having to think about what you're doing instead of just doing it. 
	t(-_- t)
	*/
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["content-type"]
  },
});


//This event will trigger whenever a client connects to the SocketIO server
io.on('connection', socket=>{
	console.log(`${socket.id} is connected`)
	
	// This is an example of how to handle a client sending a message.
	// socket.on('client_message_event', (event_body)=>{ 
		// console.log(event_body)
	// })
})

//Emit an 'update' event to all clients (Called 'Broadcasting' because it is sent to ALL clients i.e. sent broadly)
function socketUpdate(gif_name){
	io.emit('update', {'NewGif': gif_name}) //Any event can be emitted like this. To change the name of the event, change the word 'update'
	
	//io.emit('update', {'NewGif': gif_name, id: <SOCKETID>}) //if you only want to emit an event to 1 client, you can pass it's connection ID like this.
}

//variable used for demo purposes only
let example_variable = false;

// Send event every second. This is only used for an example, you can change it to send on another trigger, e.g. chat-based or sub-based
setInterval(function(){
	example_variable = !example_variable; //This will make it alternate between true and false
	
	socketUpdate(example_variable); //this sends (broadcasts) an 'update' event that the client will be able to hear.
}, 1500);
