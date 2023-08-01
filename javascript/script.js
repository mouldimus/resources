        var headerNode = document.getElementById("header");
        var titleNode = document.getElementById("title");

        var locationNode = document.location;
        var urlNode = locationNode.href;
        var urlList = urlNode.split("/");
        var urlEnd = urlList.slice(-1);

        var urlEndList = urlEnd[0].split(".");
        var url = urlEndList[0];

        headerNode.innerHTML = url;
        titleNode.innerHTML = url;