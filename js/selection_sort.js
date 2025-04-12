function selectionSort(array, containerId, timeId, spaceId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous visualization
  
    // Update time and space complexities dynamically
    document.getElementById(timeId).textContent = "O(N^2)";
    document.getElementById(spaceId).textContent = "O(1)";
  
    // Create bars for visualization
    const divs = [];
    array.forEach((value) => {
      const bar = document.createElement("div");
      bar.style = `margin: 0% 0.1%; background-color: blue; width: ${
        100 / array.length - 0.2
      }%; height: ${value}%;`;
      container.appendChild(bar);
      divs.push(bar);
    });
  
    // Selection Sort Logic with Visualization
    for (let i = 0; i < array.length - 1; i++) {
      let index_min = i;
      divs[i].style.backgroundColor = "red"; // Highlight current minimum
  
      for (let j = i + 1; j < array.length; j++) {
        divs[j].style.backgroundColor = "yellow"; // Highlight comparison
  
        if (array[j] < array[index_min]) {
          if (index_min !== i) {
            divs[index_min].style.backgroundColor = "blue"; // Reset previous minimum
          }
          index_min = j;
          divs[index_min].style.backgroundColor = "red"; // Highlight new minimum
        } else {
          divs[j].style.backgroundColor = "blue"; // Reset color
        }
      }
  
      if (index_min !== i) {
        // Swap elements
        const temp = array[index_min];
        array[index_min] = array[i];
        array[i] = temp;
  
        // Update heights
        divs[index_min].style.height = `${array[index_min]}%`;
        divs[i].style.height = `${array[i]}%`;
  
        divs[index_min].style.backgroundColor = "blue"; // Reset color
      }
      divs[i].style.backgroundColor = "green"; // Mark as sorted
    }
    divs[array.length - 1].style.backgroundColor = "green"; // Mark the last element as sorted
  }
  
  // Existing Selection Sort function for the main array
  function Selection_sort() {
    console.log("Selection sort started"); // Debugging Selection sort
  
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";
  
    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";
  
    c_delay = 0;
  
    for (var i = 0; i < array_size - 1; i++) {
      div_update(divs[i], div_sizes[i], "red"); // Color update
  
      index_min = i;
  
      for (var j = i + 1; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "yellow"); // Color update
  
        if (div_sizes[j] < div_sizes[index_min]) {
          if (index_min != i) {
            div_update(divs[index_min], div_sizes[index_min], "blue"); // Color update
          }
          index_min = j;
          div_update(divs[index_min], div_sizes[index_min], "red"); // Color update
        } else {
          div_update(divs[j], div_sizes[j], "blue"); // Color update
        }
      }
  
      if (index_min != i) {
        var temp = div_sizes[index_min];
        div_sizes[index_min] = div_sizes[i];
        div_sizes[i] = temp;
  
        div_update(divs[index_min], div_sizes[index_min], "red"); // Height update
        div_update(divs[i], div_sizes[i], "red"); // Height update
        div_update(divs[index_min], div_sizes[index_min], "blue"); // Color update
      }
      div_update(divs[i], div_sizes[i], "green"); // Color update
    }
    div_update(divs[i], div_sizes[i], "green"); // Color update
  
    enable_buttons();
    // Reapply dark mode styles after sorting completes
    if (document.body.classList.contains("dark-mode")) {
        document.querySelectorAll(".sorting-algo button").forEach(button => {
            button.classList.add("dark-mode");
        });
    }
  }
  
  // Export the function if using modules
  // export { selectionSort };
  async function bubbleSort() {
    // ...existing sorting logic...

    // Reapply dark mode styles after sorting completes
    reapplyDarkMode();
}