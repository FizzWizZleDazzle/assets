var img = [
  "https://i.imgur.com/JySyPtp.jpeg",//img 1
  "https://i.imgur.com/gomUEnA.jpeg",//img 2
"https://i.imgur.com/LP3YklN.jpeg",//img 3
"https://i.imgur.com/D5viz8u.jpeg",//img 4
"https://i.imgur.com/KpfpDMm.png",//Tidal range
"https://i.imgur.com/NOz82zW.png",// tidal range chart
"https://i.imgur.com/EAOJ20I.png",//Spring tide
"https://i.imgur.com/ULU9tOf.png",//neap tide
//fact images
"https://i.imgur.com/fqRG9Wt.jpeg",
  "https://i.imgur.com/LXrtKQl.jpeg",
  "https://i.imgur.com/JmITBL4.jpeg",
  "https://i.imgur.com/CYsvP7C.jpeg",
  "https://i.imgur.com/PPLlQz4.jpeg",
  "https://i.imgur.com/brX99GY.jpeg",
  "https://i.imgur.com/2HLcXL9.jpeg",
  "https://i.imgur.com/6oNptDT.jpeg",
  "https://i.imgur.com/bhirNnP.jpeg"
       ],
vids = ["http://www.youtube.com/embed/5ohDG7RqQ9I",
       "http://www.youtube.com/embed/KlWpFLfLFBI",
       "http://www.youtube.com/embed/3RdkXs8BibE",
         "http://www.youtube.com/embed/bPhhYhN0FAc"]




var GetCaroselHTML = function(imgs, alts, labels, descs,size,color=['makeColor']) {
  if (color[0] == 'makeColor') color = Array.from({ length: imgs.length }, () => "white");
  var c = ``;
  c += `<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" style = 'height: ${size[0]}%; width: ${size[1]}%;'>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
  for (var i = 1; i < imgs.length; i++) {
    c += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>
    `;
  }
  c += `</div>
       <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${imgs[0]}" class="d-block w-100" alt="${alts[0]}">
        <div class="carousel-caption d-none d-md-block">
          <h5 style='color:${color[0]}'>${labels[0]}</h5>
          <p style='color:${color[0]}'>${descs[0]}</p>
        </div>
      </div>`;
  for (var i = 1; i < imgs.length; i++) {
    c += `<div class="carousel-item">
        <img src="${imgs[i]}" class="d-block w-100" alt="${alts[i]}">
        <div class="carousel-caption d-none d-md-block">
          <h5 style='color:${color[i]}'>${labels[i]}</h5> 
          <p style='color:${color[i]}'>${descs[i]}</p>
        </div>
      </div>`;
  }
  c += ` </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
  return c;
}

var imageThatIhavetoupload = 'https://i.imgur.com/0GRA7l6.png';
function LoadContentsafterSize(){
   contents = [
    `<div  class='center'><h1 style = 'padding-top:50px;'>Tide Project</h1><p class='bigtxt'>By Artur Misiurev and Ian Linder</p><p>Big Money fishing group should enter into the competition “3rd Annual Blues for DU Bluefish Tournament”. This competition takes place on June 7th to June 9th.</p><img style = "float: center;" src=${imageThatIhavetoupload}></img><h1>Tides for June
    </h1>${table()}</div>`,`<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
      <a class="navbar-brand" href="#">Index</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading1">Intro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading2">Mechanics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading3">Types</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading4">Significance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading5">Conclusion</a>
        </li>
      </ul>
    </nav>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" data-bs-smooth-scroll="true" style='padding-left:${paragraphPadding}px;padding-right:${paragraphPadding}px;
      class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
      <h4 id="scrollspyHeading1">
  Understanding Tides: The Ebb and Flow of Earth's Oceanic Rhythms</h4>
      <p>Tides, the rhythmic rise and fall of sea levels, have captivated humanity for centuries, from ancient sailors navigating the seas to modern scientists unraveling the mysteries of our planet. In this comprehensive exploration, we delve deep into the background information about tides, uncovering their causes, types, significance, and the profound impact they have on our world.</p>
      <h4 id="scrollspyHeading2">The Mechanics of Tides: A Celestial Dance</h4>
      <p>Tides, in their essence, are a consequence of the gravitational forces exerted by the moon and the sun on Earth's oceans. While both celestial bodies influence tides, the moon's gravitational pull holds greater sway due to its proximity to our planet. As the Earth rotates within the gravitational fields of the moon and the sun, it experiences two high tides and two low tides each day.
  </p><p>
  The moon's gravitational force creates what are known as tidal bulges—areas where the water level is slightly higher than average. These bulges occur on the sides of the Earth facing the moon and on the opposite side, resulting in high tides. Conversely, areas perpendicular to these bulges experience low tides.
  </p><p>
  The sun, though significantly farther from Earth than the moon, also contributes to tidal phenomena. During the new and full moon phases, when the sun, moon, and Earth align, their gravitational forces combine, leading to higher high tides and lower low tides, known as spring tides. Conversely, during the first and third quarter phases, when the sun and moon are at right angles to each other, their gravitational forces partially cancel out, resulting in neap tides with less extreme tidal variations.</p>
      <h4 id="scrollspyHeading3">Types of Tides: From Diurnal to Mixed</h4>
      <p>TTides manifest in various forms, distinguished by their frequency, amplitude, and other factors. The primary types of tides include:</p>
      <ol><li><b>Diurnal Tides:</b> In regions experiencing diurnal tides, there is one high tide and one low tide each day. These tidal patterns are common in certain parts of the world, such as the Gulf of Mexico and portions of the South China Sea.</li><li><b>Semi-Diurnal Tides:</b> Semi-diurnal tides feature two high tides and two low tides each day, with approximately equal intervals between them. This pattern occurs in many coastal areas worldwide, including along the eastern coast of North America and parts of Europe.</li>
  <li><b>Mixed Tides:</b> Mixed tides combine characteristics of both diurnal and semi-diurnal tides, resulting in unequal high and low tides. These tidal patterns are often influenced by local geography, coastal topography, and resonance effects.</li>    </ol><p>Understanding the specific tidal regime of a given region is crucial for various activities, from maritime navigation and fishing to coastal development and environmental management.</p>
  <div style='height:400px;'>
  <img style='float:right;' class='border' src ='${img[6]}' width = 50%>
  <img style='float:left;' class='border' src ='${img[7]}' width = 50%>
  </div>
      <h4 id="scrollspyHeading4">Significance of Tides: Shaping Coasts, Ecosystems, and Human Activities</h4>
      <p>Tides play a multifaceted role in shaping coastal landscapes, influencing marine ecosystems, and impacting human activities in numerous ways:</p>
      <ul><li><b>Navigation:</b> Tidal currents and variations in water depth significantly impact maritime navigation, particularly in shallow waters and estuaries. Mariners rely on tidal charts and predictions to navigate safely and efficiently, avoiding hazards such as sandbars and submerged rocks.</li><li><b>Ecology:</b> Tidal fluctuations profoundly influence the distribution, behavior, and life cycles of marine organisms. Estuaries, where freshwater rivers meet the sea, are dynamic ecosystems shaped by tidal dynamics, supporting diverse communities of plants, fish, and other wildlife.</li><li><b>Energy Generation:</b> Tidal energy, derived from the kinetic energy of tidal currents, offers a promising source of renewable electricity generation. Tidal power plants, equipped with turbines, harness the energy of flowing water to produce clean, predictable power, reducing reliance on fossil fuels and mitigating climate change.</li><li><b>Coastal Engineering:</b> Engineers and coastal planners must consider tidal forces when designing infrastructure to protect coastal communities from erosion, flooding, and storm surges. Seawalls, breakwaters, and tidal barriers are among the structures used to manage tidal impacts and safeguard vulnerable coastal areas.</li><li><b>Recreation and Tourism:</b> Tidal patterns also influence recreational activities such as surfing, beachcombing, and wildlife watching. Enthusiasts time their outings to coincide with optimal tidal conditions, whether it's catching the perfect wave or exploring tide pools teeming with marine life.</li></ul>
      <h4 id="scrollspyHeading5">Conclusion: Tides as a Window into Earth's Dynamic Systems</h4>
      <p>Tides represent a captivating interplay between celestial bodies and Earth's oceans, embodying the interconnectedness of our planet's systems. From their origins in gravitational physics to their far-reaching impacts on coastal environments and human activities, tides serve as a constant reminder of the intricate dance of nature.</p>
      <p>As we continue to study and harness the forces of tides, we gain valuable insights into the mechanisms driving Earth's dynamic systems. Whether for scientific inquiry, sustainable development, or simply marveling at the wonders of the natural world, understanding tides enriches our appreciation of the vast and diverse tapestry of life on our planet.</p>
      
    </div>`,``,``,`
    <button data-bs-toggle="modal" data-bs-target="#quizModal" class="btn btn-primary">Take Quiz</button>`,`
    <h1 class='center' style = 'padding-top:50px;'>Fun Facts about tides</h1>
  <ul class="list-group list-group-flush center top-padding" style='padding-left:${paragraphPadding}px;padding-right:${paragraphPadding}px;'>
    <li class="list-group-item">
    <p>Astronomer Seleucus of Seleucia was the first scientist to admit that tides were caused by the Moon in 150 BC;</p>
    <img class='border' src ='${img[8]}' width = 50%>
    </li>
    <li class="list-group-item">
  <p>The Moon is the most relevant factor in the creation of tides. The sun's gravitational force on the Earth is only 46 percent that of the Moon;</p>
  <img class='border' src ='${img[9]}' width = 50%>
  </li>
  <li class="list-group-item">
  <p>Since tides can be viewed as shallow-water waves that travel across the ocean, their propagation speed is solely dependent on the ocean depth;</p>
  <img class='border' src ='${img[10]}' width = 50%>
  </li>
  <li class="list-group-item">
  <p>The wavelength of a tidal wave is around 12,430 miles (roughly 20,000 kilometers);</p>
  </li>
  <li class="list-group-item">
  <p>The tidal cycle is of 24 hours and 50 minutes;</p>
  </li>
  <li class="list-group-item">
  <p>The Panama Canal has locks to raise and lower ships in transit from the Atlantic and Pacific oceans because of the difference in tide range and timing on both coasts. Only in February are the tides about the same on the Pacific side and Atlantic side;</p>
  <img class='border' src ='${img[13]}' width = 50%>
  </li>
  <li class="list-group-item">
  <p>Some regions of the world have a larger tidal range (the difference between the low and the high tide) than others because of the differences in the shape of the ocean floor;</p>
  <img class='border' src ='${img[14]}' width = 50%>
  </li>
  <li class="list-group-item">
  <p>In the Bay of Fundy, the tidal range is about 16 meters (53 feet). In the Caribbean Sea, the tidal range is between 10 and 20 centimeters (4-8 inches);</p>
  <img class='border' src ='${img[15]}' width = 50%>
  </li>
  <li class="list-group-item">
  <p>Although on a smaller scale, the shape of the shoreline, bays, estuaries, local winds, and weather patterns can also affect tides. However, there are roughly 150 factors influencing tides;</p>
  <img class='border' src ='${img[16]}' width = 50%>
  </li>
  <li class="list-group-item">
  Tidal power is the most predictable of all renewable energy sources;
  </li>
  </ul>`
  ]
}
var defaultContent = `${GetCaroselHTML([img[0],img[1],img[2],img[3]],['tide img','tide img','tide img','tide img'],['','','',''],['','','',''],[90,100])}`//<div id='trigger' class='trigger'><div id='box' class='box'></div></div>`

,LoadContent = function(page){
  console.log(paragraphPadding);
  var div = document.getElementById('other');
  div.innerHTML = contents[page];
  if (page===4) {displayQuestion(); var o = document.getElementById('other'); o.style.paddingRight = '40%',o.style.paddingLeft = '40%',o.style.paddingTop = '100px';loadlistener()}
}
,LoadDefaultContent=function(){
  console.log(paragraphPadding);
  var div = document.getElementById('default')
  div.innerHTML = defaultContent;
}

,table = () =>{return `<table border="1.5" style="padding-right:100px;padding-left:100px;">
  <tr>
    <th>DAY</th>
    <th>R&S</th>
    <th>1st TIDE</th>
    <th>2nd TIDE</th>
    <th>3rd TIDE</th>
    <th>4th TIDE</th>
    <th>Coefficent</th>
  </tr>
  <tr>
    <td>Sat</td>
 
    <td>5:38 am<br>8:19 pm</td>
    <td>3:49 am<br>2.4 ft</td>
    <td>9:52 am<br>0.3 ft</td>
    <td>4:34 pm<br>2.5 ft</td>
    <td>10:32 pm<br>0.4 ft</td>
    <td>69  average</td>
  </tr>
  <tr>
    <td>Sun</td>
 
    <td>5:37 am<br>8:19 pm</td>
    <td>4:46 am<br>2.4 ft</td>
    <td>10:45 am<br>0.2 ft</td>
    <td>5:32 pm<br>2.7 ft</td>
    <td>11:37 pm<br>0.3 ft</td>
    <td>76  high</td>
  </tr>
  <tr>
    <td>Mon</td>
 
    <td>5:37 am<br>8:20 pm</td>
    <td>5:40 am<br>2.3 ft</td>
    <td>11:38 am<br>0.1 ft</td>
    <td>6:27 pm<br>2.8 ft</td>
    <td>---</td>
    <td>81  high</td>
  </tr>
  <tr>
    <td>Tue</td>
 
    <td>5:37 am<br>8:21 pm</td>
    <td>12:38 am<br>0.3 ft</td>
    <td>6:32 am<br>2.3 ft</td>
    <td>12:29 pm<br>0.1 ft</td>
    <td>7:20 pm<br>2.9 ft</td>
    <td>85  high</td>
  </tr>
  <tr>
    <td>Wed</td>
 
    <td>5:37 am<br>8:21 pm</td>
    <td>1:33 am<br>0.2 ft</td>
    <td>7:24 am<br>2.2 ft</td>
    <td>1:18 pm<br>0.1 ft</td>
    <td>8:13 pm<br>3.0 ft</td>
    <td>86  high</td>
  </tr>
  <tr>
    <td>Thu</td>
 
    <td>5:36 am<br>8:22 pm</td>
    <td>2:25 am<br>0.2 ft</td>
    <td>8:16 am<br>2.2 ft</td>
    <td>2:05 pm<br>0.1 ft</td>
    <td>9:05 pm<br>3.0 ft</td>
    <td>84  high</td>
  </tr>
  <tr>
    <td>Fri</td>
 
    <td>5:36 am<br>8:22 pm</td>
    <td>3:14 am<br>0.3 ft</td>
    <td>9:06 am<br>2.2 ft</td>
    <td>2:51 pm<br>0.1 ft</td>
    <td>9:53 pm<br>2.9 ft</td>
    <td>80  high</td>
  </tr>
  <tr>
    <td>Sat</td>
 
    <td>5:36 am<br>8:23 pm</td>
    <td>4:03 am<br>0.3 ft</td>
    <td>9:54 am<br>2.1 ft</td>
    <td>3:38 pm<br>0.2 ft</td>
    <td>10:39 pm<br>2.8 ft</td>
    <td>74  high</td>
  </tr>
  <tr>
    <td>Sun</td>
 
    <td>5:36 am<br>8:23 pm</td>
    <td>4:53 am<br>0.4 ft</td>
    <td>10:41 am<br>2.1 ft</td>
    <td>4:25 pm<br>0.3 ft</td>
    <td>11:22 pm<br>2.7 ft</td>
    <td>67  average</td>
  </tr>
  <tr>
    <td>Mon</td>
 
    <td>5:36 am<br>8:24 pm</td>
    <td>5:44 am<br>0.5 ft</td>
    <td>11:27 am<br>2.0 ft</td>
    <td>5:16 pm<br>0.4 ft</td>
    <td>---</td>
    <td>60  average</td>
  </tr>
  <tr>
    <td>Tue</td>
 
    <td>5:36 am<br>8:24 pm</td>
    <td>12:04 am<br>2.5 ft</td>
    <td>6:35 am<br>0.6 ft</td>
    <td>12:15 pm<br>2.0 ft</td>
    <td>6:10 pm<br>0.5 ft</td>
    <td>53  average</td>
  </tr>
  <tr>
    <td>Wed</td>
 
    <td>5:36 am<br>8:25 pm</td>
    <td>12:46 am<br>2.4 ft</td>
    <td>7:23 am<br>0.6 ft</td>
    <td>1:07 pm<br>2.0 ft</td>
    <td>7:07 pm<br>0.6 ft</td>
    <td>47  low</td>
  </tr>
  <tr>
    <td>Thu</td>
 
    <td>5:36 am<br>8:25 pm</td>
    <td>1:31 am<br>2.3 ft</td>
    <td>8:07 am<br>0.6 ft</td>
    <td>2:02 pm<br>2.0 ft</td>
    <td>8:04 pm<br>0.7 ft</td>
    <td>44  low</td>
  </tr>
  <tr>
    <td>Fri</td>
 
    <td>5:36 am<br>8:25 pm</td>
    <td>2:18 am<br>2.1 ft</td>
    <td>8:47 am<br>0.6 ft</td>
    <td>3:00 pm<br>2.0 ft</td>
    <td>9:02 pm<br>0.7 ft</td>
    <td>43  low</td>
  </tr>
  <tr>
    <td>Sat</td>
 
    <td>5:36 am<br>8:26 pm</td>
    <td>3:07 am<br>2.0 ft</td>
    <td>9:25 am<br>0.5 ft</td>
    <td>3:55 pm<br>2.1 ft</td>
    <td>10:00 pm<br>0.7 ft</td>
    <td>45  low</td>
  </tr>
  <tr>
    <td>Sun</td>
 
    <td>5:36 am<br>8:26 pm</td>
    <td>3:56 am<br>1.9 ft</td>
    <td>10:03 am<br>0.5 ft</td>
    <td>4:46 pm<br>2.2 ft</td>
    <td>10:58 pm<br>0.7 ft</td>
    <td>49  low</td>
  </tr>
  <tr>
    <td>Mon</td>
 
    <td>5:36 am<br>8:26 pm</td>
    <td>4:44 am<br>1.9 ft</td>
    <td>10:43 am<br>0.4 ft</td>
    <td>5:33 pm<br>2.3 ft</td>
    <td>11:53 pm<br>0.6 ft</td>
    <td>54  average</td>
  </tr>
  <tr>
    <td>Tue</td>
 
    <td>5:36 am<br>8:27 pm</td>
    <td>5:30 am<br>1.9 ft</td>
    <td>11:25 am<br>0.3 ft</td>
    <td>6:18 pm<br>2.4 ft</td>
    <td>---</td>
    <td>60  average</td>
  </tr>
  <tr>
    <td>Wed</td>
 
    <td>5:36 am<br>8:27 pm</td>
    <td>12:42 am<br>0.5 ft</td>
    <td>6:16 am<br>1.8 ft</td>
    <td>12:09 pm<br>0.2 ft</td>
    <td>7:04 pm<br>2.5 ft</td>
    <td>66  average</td>
  </tr>
  <tr>
    <td>Thu</td>
 
    <td>5:36 am<br>8:27 pm</td>
    <td>1:27 am<br>0.5 ft</td>
    <td>7:03 am<br>1.8 ft</td>
    <td>12:53 pm<br>0.1 ft</td>
    <td>7:51 pm<br>2.6 ft</td>
    <td>72  high</td>
  </tr>
  <tr>
    <td>Fri</td>
 
    <td>5:37 am<br>8:27 pm</td>
    <td>2:09 am<br>0.4 ft</td>
    <td>7:50 am<br>1.9 ft</td>
    <td>1:38 pm<br>0.0 ft</td>
    <td>8:39 pm<br>2.7 ft</td>
    <td>76  high</td>
  </tr>
  <tr>
    <td>Sat</td>
 
    <td>5:37 am<br>8:27 pm</td>
    <td>2:51 am<br>0.4 ft</td>
    <td>8:39 am<br>1.9 ft</td>
    <td>2:24 pm<br>0.0 ft</td>
    <td>9:26 pm<br>2.7 ft</td>
    <td>79  high</td>
  </tr>
  <tr>
    <td>Sun</td>
 
    <td>5:37 am<br>8:27 pm</td>
    <td>3:34 am<br>0.3 ft</td>
    <td>9:29 am<br>2.0 ft</td>
    <td>3:12 pm<br>-0.1 ft</td>
    <td>10:13 pm<br>2.8 ft</td>
    <td>79  high</td>
  </tr>
  <tr>
    <td>Mon</td>
 
    <td>5:38 am<br>8:28 pm</td>
    <td>4:19 am<br>0.3 ft</td>
    <td>10:20 am<br>2.0 ft</td>
    <td>4:02 pm<br>0.0 ft</td>
    <td>10:59 pm<br>2.8 ft</td>
    <td>78  high</td>
  </tr>
  <tr>
    <td>Tue</td>
 
    <td>5:38 am<br>8:28 pm</td>
    <td>5:07 am<br>0.3 ft</td>
    <td>11:12 am<br>2.1 ft</td>
    <td>4:57 pm<br>0.1 ft</td>
    <td>11:46 pm<br>2.7 ft</td>
    <td>76  high</td>
  </tr>
  <tr>
    <td>Wed</td>
 
    <td>5:38 am<br>8:28 pm</td>
    <td>5:57 am<br>0.3 ft</td>
    <td>12:06 pm<br>2.2 ft</td>
    <td>5:57 pm<br>0.2 ft</td>
    <td>---</td>
    <td>72  high</td>
  </tr>
  <tr>
    <td>Thu</td>
 
    <td>5:39 am<br>8:28 pm</td>
    <td>12:34 am<br>2.6 ft</td>
    <td>6:48 am<br>0.2 ft</td>
    <td>1:04 pm<br>2.3 ft</td>
    <td>7:01 pm<br>0.3 ft</td>
    <td>68  average</td>
  </tr>
  <tr>
    <td>Fri</td>
 
    <td>5:39 am<br>8:28 pm</td>
    <td>1:26 am<br>2.5 ft</td>
    <td>7:39 am<br>0.2 ft</td>
    <td>2:07 pm<br>2.4 ft</td>
    <td>8:06 pm<br>0.4 ft</td>
    <td>65  average</td>
  </tr>
  <tr>
    <td>Sat</td>
 
    <td>5:39 am<br>8:28 pm</td>
    <td>2:22 am<br>2.4 ft</td>
    <td>8:30 am<br>0.2 ft</td>
    <td>3:14 pm<br>2.5 ft</td>
    <td>9:13 pm<br>0.4 ft</td>
    <td>63  average</td>
  </tr>
  <tr>
    <td>Sun</td>
 
    <td>5:40 am<br>8:27 pm</td>
    <td>3:21 am<br>2.3 ft</td>
    <td>9:22 am<br>0.2 ft</td>
    <td>4:20 pm<br>2.6 ft</td>
    <td>10:20 pm<br>0.5 ft</td>
    <td>62  average</td>
  </tr>
</table>
`}
