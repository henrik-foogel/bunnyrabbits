<template>
    <div id="admin">
        <section class="form">
            <h3>Register Event</h3>
            <form >
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Event name..">

                <label for="where">Where?</label>
                <input type="text" id="where" name="where" placeholder="Where..">

                <label for="date">Date?</label>
                <input type="text" id="date" name="date" placeholder="Date..(ex.2019-02-20)">

                <label for="timeFrom">Time from:</label>
                <input type="text" id="timeFrom" name="timeFrom" placeholder="Time from..">

                <label for="where">Time to:</label>
                <input type="text" id="timeTo" name="timeTo" placeholder="Time to..">

                <input id="submit" type="submit" value="Submit">
            </form>
        </section>
        <section>
            <h3>Event List</h3>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  #admin {
    font-family: 'Sansita', sans-serif;
    max-width: 18rem;
    width: 100%;
    color:#fff;
  }
 
 .form input {
    width: 100%;
    padding: .3rem;
    margin: .3rem;
}
#submit {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin-top: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}

</style>
