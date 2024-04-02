
      var c=1;
      var showing_favourites=0;
      var member=JSON.parse(localStorage.getItem("member"));
      //localStorage.removeItem(member);
      //member=null;
      if (member==null)
        member=[{name:"Shraddha",ilink:"https://instagram.com/shraddhakapoor/?hl=en",tlink:"https://twitter.com/shraddhakapoor?lang=en",flink:"https://www.facebook.com/ShraddhaKapoor/",like:0},{name:"Rachel",ilink:"https://www.instagram.com/jenniferaniston/?hl=en",tlink:"https://twitter.com/officialaniston?lang=en",flink:"https://www.facebook.com/JenniferAniston/",like:0},{name:"Ross",ilink:"https://www.instagram.com/_schwim_/?hl=en",tlink:"https://en.wikipedia.org/wiki/David_Schwimmer",flink:"https://en.wikipedia.org/wiki/David_Schwimmer",like:0},{name:"Joey",ilink:"https://www.instagram.com/mleblanc/?hl=en",tlink:"https://twitter.com/matt_leblanc?lang=en",flink:"https://en.wikipedia.org/wiki/Matt_LeBlanc",like:0},{name:"chandler",ilink:"https://www.instagram.com/mattyperry4/?hl=en",tlink:"https://twitter.com/matthewperry?lang=en",flink:"https://www.facebook.com/MatthewPerry/",like:0},{name:"Monica",ilink:"https://www.instagram.com/courteneycoxofficial",tlink:"https://twitter.com/courteneycox?lang=en",flink:"https://en.wikipedia.org/wiki/Courteney_Cox",like:0},{name:"Phoebe",ilink:"https://www.instagram.com/lisakudrow/?hl=en",tlink:"https://twitter.com/lisakudrow?lang=en",flink:" ",like:0}];
      boot();
      function add_member(name,index)
      {
        let s=">🤍";
        if(member[index].like==1)
          s=`>❤️`; 
        document.querySelector('.main').innerHTML=document.querySelector('.main').innerHTML+
        `<div class="`+name+`" style="background-color: rgb(236, 236, 236);
                    box-shadow: 0px 0px 4px rgb(90, 90, 90);
                    height: 350px;
                    width: 280px;
                    padding: 5px 5px 5px 5px;
                    margin:5px 5px 5px 5px;
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr;
                    row-gap: 5px;">
          <div class="name">`+name+`</div>
          <div class="artist_pic">
            <img src="images/`+name+`2.jpg" class="photo" onclick="next('`+name+`',`+index+`,1);">
            <div class="liked">
              <button class="like" onclick="like_but('`+name+`',`+member[index].like+`,`+index+`);"`+s+`</button>
            </div>
            <p class="count">1</p>
          </div>
          <div class="weblist">
            <div class="web">
              <img src="images/instagram.png" class="sitepic">
              <div class="sitename">
                <a href="`+member[index].ilink+`" target="_blank">Instagram</a>
              </div>
            </div>
            <div class="web">
              <img src="images/twitter.png" class="sitepic">
              <div class="sitename">
                <a href="`+member[index].tlink+`" target="_blank">Twitter</a>
              </div>
            </div>
            <div class="web">
              <img src="images/facebook.png" class="sitepic">
              <div class="sitename">
                <a href="`+member[index].flink+`" target="_blank">Facebook / Wiki</a>
              </div>
            </div>
          </div>
        </div>`;
      }
      function add_member_section()
      {
        document.querySelector('.main').innerHTML=document.querySelector('.main').innerHTML+
        `<div style="background-color: rgb(236, 236, 236);
                    box-shadow: 0px 0px 4px rgb(90, 90, 90);
                    height: 350px;
                    width: 280px;
                    padding: 5px 5px 5px 5px;
                    margin:5px 5px 5px 5px;
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
                    row-gap: 5px;">
            <div class="name">Add a Member ?</div>
            <div style="display:flex;
                        flex-direction:column;align-items:center;
                        ">
                <p style="margin:0px;
                " >NAME</p>
                <input type="text" placeholder:"name" style="display:inline-block;flex:2;" class="name_upload">
            </div>
            <div style="display:flex;
                        flex-direction:column;align-items:center;
                        ">
                <p style="margin:0px;
                " >Instagram</p>
                <input type="text" placeholder:"name" style="display:inline-block;flex:2;" class="instaid_upload">
            </div>
            <div style="display:flex;
                        flex-direction:column;align-items:center;
                        ">
                <p style="margin:0px;
                " >Twitter</p>
                <input type="text" placeholder:"name" style="display:inline-block;flex:2;" class="twitterid_upload">
            </div>
            <div style="display:flex;
                        flex-direction:column;align-items:center;
                        ">
                <p style="margin:0px;
                " >FaceBook / Wiki</p>
                <input type="text" placeholder:"name" style="display:inline-block;flex:2;" class="facebookid_upload">
            </div>
            <div style="display:flex;align-items:center;
            justify-content:center;">
              <button class="name" style="border:none;padding:5px 10px 5px 10px;cursor:pointer;box-shadow: 1px 1px 4px rgb(90, 90, 90);" onclick="upload_data();">ADD</button>
            </div>
        </div>
        <div style="background-color: rgb(236, 236, 236);
                    box-shadow: 0px 0px 4px rgb(90, 90, 90);
                    height: 350px;
                    width: 280px;
                    padding: 5px 5px 5px 5px;
                    margin:5px 5px 5px 5px;
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
                    row-gap: 5px;">
          <div class="name">Remove a Member ?</div>
          <div></div>
          <div style="display:flex;
                        flex-direction:column;align-items:center;
                        ">
                <p style="margin:0px;
                " >NAME</p>
                <input type="text" placeholder:"name" style="display:inline-block;flex:2;" class="name_remove">
          </div>
          <div style="display:flex;
                        flex-direction:column;align-items:center;
                        ">
                <p style="margin:0px;
                " >Enter Password</p>
                <input type="text" placeholder:"name" style="display:inline-block;flex:2;" class="password">
          </div>
          <div style="display:flex;align-items:center;
            justify-content:center;">
              <button class="name" style="border:none;padding:5px 10px 5px 10px;cursor:pointer;box-shadow: 1px 1px 4px rgb(90, 90, 90);" onclick="remove_data();">REMOVE</button>
          </div>
          <div class="popup" style="display:flex;align-items:center;justify-content:center; font-weight:bold;font-size:19px;"></div>
        </div>`;
      }
      function boot()
      {
        for(let i=1;i<(member.length);i++)
          add_member(member[i].name,i);
        add_member_section();
      }

      function newmem()
      {
        let x = document.querySelector('.input-mem').value;
        document.querySelector('.input-mem').value='';
        let last_index = member.length;
        member[last_index]={name:x,ilink:"https://twitter.com/matt_leblanc?lang=en",tlink:"https://twitter.com/matt_leblanc?lang=en",flink:"https://twitter.com/matt_leblanc?lang=en",like:0};
        add_member(x,last_index);
        localStorage.setItem("member",JSON.stringify(member));
      }

      function next(name,index,a)
      {
        let s=">🤍";
        if(member[index].like==1)
          s=`>❤️`;
        if(c==1)
        {
          alert('Perfect, You are a fan boy of '+name+'.');
          c++;
        }
        a++;
        if(a==5)
          a=1;
        document.querySelector('.'+name).querySelector('.artist_pic').innerHTML=`<img src="images/`+name+a+`.jpg" class="photo" onclick="next('`+name+`',`+index+`,`+a+`);"><div class="liked">
        <button class="like" onclick="like_but('`+name+`',`+member[index].like+`,`+index+`);"`+s+`</button></div><p class="count">`+a+`</p>`;
      }

      function like_but(name,is_fav,index)
      {
        let s=">🤍";
        if(is_fav==0)
        {
          s=`>❤️`;
          member[index].like=1;
        }
        else
          member[index].like=0;
        document.querySelector('.main').querySelector('.'+name).querySelector('.artist_pic').querySelector('.liked').innerHTML=`<button class="like" onclick="like_but('`+name+`',`+member[index].like+`,`+index+`);"`+s+`</button>`;
        localStorage.setItem("member",JSON.stringify(member));  
      }

      function favourites()
      {
        let s=`Show Fav❤️`;
        let f=`F.A.V.O.U.R.I.T.E.S`;
        if(showing_favourites==0)
        {
          s="Show All";
          showing_favourites=1;
          document.querySelector('.main').innerHTML=``;
          for(let i=0;i<(member.length);i++)
          {
            if(member[i].like==1)
              add_member(member[i].name,i);
          }
        }
        else
        {
          f=`F . R . I . E . N . D . S`;
          showing_favourites=0;
          document.querySelector('.main').innerHTML=``;
          boot();
        }
        document.querySelector('.head').innerHTML=`${f}<button class="show_favs" onclick="favourites();">`+s+`</button>`;
      }

      function upload_data()
      {
        let last_index = member.length;
        member[last_index]={name:document.querySelector('.name_upload').value,ilink:"https://instagram.com/"+document.querySelector('.instaid_upload').value,tlink:document.querySelector('.twitterid_upload').value,flink:document.querySelector('.facebookid_upload').value,like:0};
        document.querySelector('.main').innerHTML=``;
        localStorage.setItem("member",JSON.stringify(member));
        boot();
      }
      function remove_data()
      {
        let key=document.querySelector('.password').value;
        if(key===`14062004`)
        {
          let name=document.querySelector('.name_remove').value;
          for(let i=0;i<member.length;i++)
            if(member[i].name===name)
            {
              member.splice(i,1);
              break;
            }
          document.querySelector('.main').innerHTML=``;
          boot();
        }
        else
        {
          document.querySelector('.password').value=``;
          document.querySelector('.name_remove').value=``;
          document.querySelector('.popup').innerHTML=`Wrong Password &#128405 
          <button onclick="document.querySelector('.popup').innerHTML='';" style="margin-top:3px;margin-left:5px;cursor:pointer;border:0px;font-size:16px;" class="name">
            OK
          </button>`;
        }
        localStorage.setItem("member",JSON.stringify(member));
      }
