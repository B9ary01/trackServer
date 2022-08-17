const app = require("./server");

const port = process.env.PORT;


// Root route
app.get('/', (req, res) => res.send(' Welcome to the Habit Tracker App!'))


app.listen(port, () => console.log(`listening to port -  ${port}`))
