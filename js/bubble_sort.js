
function Bubble()
{
    console.log("Bubble sort started"); // Debugging Bubble sort
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";
    // document.getElementById("Time-diff").innerText=time2-time1;

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        console.log(1);
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
    // Reapply dark mode styles after sorting completes
    if (document.body.classList.contains("dark-mode")) {
        document.querySelectorAll(".sorting-algo button").forEach(button => {
            button.classList.add("dark-mode");
        });
    }
}
async function bubbleSort() {
    // ...existing sorting logic...

    // Reapply dark mode styles after sorting completes
    reapplyDarkMode();
}