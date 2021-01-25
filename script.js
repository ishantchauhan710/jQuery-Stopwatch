$(function() {
    var mode = 0;
    var timeCounter = 0;
    var lapCounter = 0;
    var action;
    var lapNumber = 0;
    var timeMinutes, timeSeconds, timeMilliseconds, lapMinutes, lapSeconds, lapMilliseconds;
    
    hideshowButtons("#btnStart","#btnLap");
    $("#btnStart").click(function() {
        mode = 1;
        hideshowButtons("#btnStop","#btnLap");
        startAction();
    })
    
    $("#btnStop").click(function() {
        hideshowButtons("#btnResume","#btnReset");
        clearInterval(action);
    });
    
    
    $("#btnResume").click(function() {
        hideshowButtons("#btnStop","#btnLap");
        startAction();
    });
    
    $("#btnReset").click(function() {
        location.reload();
    });
    
    $("#btnLap").click(function() {
       if(mode) {
           clearInterval(action);
           lapCounter = 0;
           addLap();
           startAction();
       } 
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function hideshowButtons(x,y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }
    
    function startAction() {
        action = setInterval(function() {
            timeCounter++;
            if(timeCounter == 100*60*100) {
                timeCounter = 0;
            }
            lapCounter++;
            if(lapCounter == 100*60*100) {
                lapCounter = 0;
            }
            updateTime();
        },10);
    }
    
    function updateTime() {
       timeMinutes = Math.floor(timeCounter/6000); 
       timeSeconds = Math.floor((timeCounter%6000)/100);
       timeMilliseconds = (timeCounter%6000)%100;
        
        $("#timeMinutes").text(format(timeMinutes));
        $("#timeSeconds").text(format(timeSeconds));
        $("#timeMilliseconds").text(format(timeMilliseconds));
        
        
       lapMinutes = Math.floor(lapCounter/6000); 
       lapSeconds = Math.floor((lapCounter%6000)/100);
       lapMilliseconds = (lapCounter%6000)%100;
        
        $("#lapMinutes").text(format(lapMinutes));
        $("#lapSeconds").text(format(lapSeconds));
        $("#lapMilliseconds").text(format(lapMilliseconds));
        
        
    }
    
    
    function format(number) {
        if(number<10) {
            return '0'+number;
        } else {
            return number;
        }
    }
    
    
    function addLap() {
        lapNumber++;
        var myLapDetails = 
            '<div class="lapsBox">' +
                '<div class="laptimetitle">' +
                'Lap ' + lapNumber +
                '</div>' +
                
                '<div class="laptime">' +
                '<span>' + format(lapMinutes) + '</span>' +
                ':<span>' + format(lapSeconds) + '</span>' +
                ':<span>' + format(lapMilliseconds) + '</span>' +
                '</div>'
            '</div>';
        $(myLapDetails).prependTo(".laps");
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});