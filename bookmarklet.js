javascript:var%20awesome%20=%20function(domId)%20{var%20elem%20=%20$(%27#%27%20+%20domId),%20evt%20=%20document.createEvent(%22MouseEvents%22);evt.initMouseEvent(%22click%22,%20true,%20true,%20window,1,%200,%200,%20elem.offset().left,%20elem.offset().top,%20false,%20false,%20false,%20false,%200,%20null);document.getElementById(domId).dispatchEvent(evt)};try%20{awesome.domId%20=%20$(%27a[style*=left\\:\\%20370px]%27)[0].id;}%20catch(e)%20{console.log(%22Could%20not%20automatically%20detect%20awesome%20button%27s%20DOM%20ID.%20Caught%20error:%20%22%20+%20e);}if(typeof%20awesome.domId%20==%20%27undefined%27)%20{awesome.domId%20=%20window.prompt(%22What%27s%20your%20awesome%20button%27s%20DOM%20ID?%22,%20%22%22);}setInterval(%27awesome(%22%27+awesome.domId+%27%22)%27,%2045000);awesome(awesome.domId);window.alert(%22I%20don%27t%20always%20awesome,%20but%20when%20I%20do,%20I%20do%20it%20automatically.%22)