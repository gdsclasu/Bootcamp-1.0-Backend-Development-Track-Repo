// functional program
function step_count(start, stop, step, bigstep) {
    for (let i = start; i <= stop; i += step) {

      // As much as i is greater than or equal to 100
      if (i >= 100) {
        step = bigstep
      }
      // for every loop, print the current value
      console.log(i)
    }
}

// recursive program
function step_count(start, stop, step, bigstep) {
    if (start <= stop) {
        let value = start
        console.log(value)

        if (value >= 100) {
            step = bigstep
        }

        step_count(start + step, stop, step, bigstep)
    }
}

// calling the function
step_count(10, 1000, 10, 100)