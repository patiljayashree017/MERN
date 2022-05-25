
export default (tickets = [], action) => {

    switch (action.type) {
  
      case "FETCH":
  
        // console.log(action.payload.data);
  
        return action.payload.data;

      case "CREATE":
        console.log(action.payload.data.ticket);
        return [...tickets, action.payload.data.ticket];

      case "UPDATE":
        // console.log(action.payload._id)
  
        return tickets.map((ticket) =>
  
          ticket._id === action.payload._id ? action.payload : ticket
  
        );

      case "DELETE":
        console.log(action.payload._id )
        return tickets.map((ticket) =>
  
          ticket._id === action.payload._id ? action.payload : ticket
  
        );

      default:
  
        return tickets;
  
    }
  
  };