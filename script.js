document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     SETTINGS
  =============================== */

  const SECRET_PASSWORD = "forever";
  const BOYFRIEND_NAME = "baby";


  /* ===============================
     SUPABASE
  =============================== */

  const SUPABASE_URL =
    "https://vqesxwumtkubrbotaaa.supabase.co";

  const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_L_I0fhV__DX-1KGhaxI4_A_qbLFOtB1";

  const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  const STORAGE_BUCKET = "sumit";


  /* ===============================
     LOVE LETTER
  =============================== */

  const LOVE_LETTER = [
    "I don't know exactly when you became such an important part of my life.",
    "But somewhere between all our little conversations, memories, fights, laughs and moments, you became my favourite person.",
    "And if I could choose again, I would still choose you. Every single time. ♡"
  ];


  /* ===============================
     MEMORIES
  =============================== */

  const MEMORIES = [

    {
      date: "07 MAR 2023",
      title: "Proposal",
      text: "The day you became most special to me.",
      photo: "date.jpeg"
    },

    {
      date: "16 APRIL 2023",
      title: "Our First date",
      text: "First time i saw you as my boyfriend....best date i could ever experience.",
      photo: "date.jpeg"
    },

    {
      date: "08 NOV 2023",
      title: "Our First smooch",
      text: "My shyness was at it's peak but the most perfect moment i could have.",
      photo: "smooch.jpeg"
    },

    {
      date: "14 NOV 2023",
      title: "Our First kiss",
      text: "The day I realized my feeling were more deep for you.",
      photo: "kiss.jpeg"
    },

    {
      date: "14 June 2024",
      title: "A Day Worth Keeping in calendar",
      text: "That room, your smell, our closeness.",
      photo: null
    },

    {
      date: "FOREVER",
      title: "To Be Continued...",
      text: "Every page we haven't written yet is my favorite one.",
      photo: null
    }

  ];


  /* ===============================
     NOTE
  =============================== */

  const NOTE_TITLE =
    "A little note, from me to you";


  const NOTE_TEXT = `
tum duniya ke best boyfriend ho yaar 🥹❤️
22nd june se abhi tk tum meri life ka best part ho
aur aage bhi hmesha rhoge.

bas aise hi mere saath rehna
aur jb mei gussa kru toh mna lia kro
aur jb tum gussa ho
(tum mrdjaat se ho koi hq nhi h gussa hone ka)😂❤️

i love youuu so muchhh 🫶🏻
`;


  /* ===============================
     ELEMENTS
  =============================== */

  const login =
    document.getElementById("login");

  const loginForm =
    document.getElementById("loginForm");

  const passwordInput =
    document.getElementById("pw");

  const errorMessage =
    document.getElementById("err");

  const proposal =
    document.getElementById("proposal");

  const yesButton =
    document.getElementById("yes");

  const noButton =
    document.getElementById("no");

  const main =
    document.getElementById("main");


  /* ===============================
     NAME
  =============================== */

  const nameInput =
    loginForm.querySelector('input:not(#pw)');


  document
    .querySelectorAll("[data-name]")
    .forEach(function (element) {

      element.textContent =
        BOYFRIEND_NAME;

    });


  /* ===============================
     LOGIN
  =============================== */

  loginForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const enteredPassword =
        passwordInput.value.trim();


      if (enteredPassword === SECRET_PASSWORD) {

        errorMessage.classList.add("hidden");

        errorMessage.textContent = "";


        if (
          nameInput &&
          nameInput.value.trim() !== ""
        ) {

          document
            .querySelectorAll("[data-name]")
            .forEach(function (element) {

              element.textContent =
                nameInput.value.trim();

            });

        }


        login.classList.add("hidden");

        proposal.classList.remove("hidden");

        passwordInput.value = "";

        window.scrollTo(0, 0);

      }

      else {

        errorMessage.classList.remove("hidden");

        errorMessage.textContent =
          "Hmm... that's not the secret word ♡";

        passwordInput.value = "";

        passwordInput.focus();

      }

    }
  );


  /* ===============================
     YES BUTTON
  =============================== */

  yesButton.addEventListener(
    "click",
    function () {

      createHeartBurst();


      setTimeout(function () {

        proposal.classList.add("hidden");

        main.classList.remove("hidden");

        window.scrollTo(0, 0);

        revealElements();

      }, 900);

    }
  );


  /* ===============================
     NO BUTTON
  =============================== */

  function moveNoButton() {

    const buttonWidth =
      noButton.offsetWidth;

    const buttonHeight =
      noButton.offsetHeight;


    const maxX =
      window.innerWidth -
      buttonWidth -
      30;


    const maxY =
      window.innerHeight -
      buttonHeight -
      30;


    const x =
      Math.max(
        15,
        Math.random() * maxX
      );


    const y =
      Math.max(
        15,
        Math.random() * maxY
      );


    noButton.style.position = "fixed";

    noButton.style.left =
      `${x}px`;

    noButton.style.top =
      `${y}px`;

    noButton.style.zIndex =
      "9999";

  }


  noButton.addEventListener(
    "mouseenter",
    moveNoButton
  );


  noButton.addEventListener(
    "touchstart",
    function (event) {

      event.preventDefault();

      moveNoButton();

    }
  );


  noButton.addEventListener(
    "click",
    moveNoButton
  );


  /* ===============================
     LOVE LETTER
  =============================== */

  const letter =
    document.getElementById("letter");


  LOVE_LETTER.forEach(function (text) {

    const paragraph =
      document.createElement("p");

    paragraph.textContent =
      text;

    letter.appendChild(paragraph);

  });


  /* ===============================
     TIMELINE
  =============================== */

  const timeline =
    document.getElementById("timeline");


  MEMORIES.forEach(
    function (memory, index) {

      const item =
        document.createElement("article");


      item.className =
        `item reveal ${
          index % 2 === 1
            ? "odd"
            : ""
        }`;


      let photoHTML = "";


      if (memory.photo) {

        photoHTML = `

          <div class="mphoto">

            <img
              src="${memory.photo}"
              alt="${memory.title}"
            >

          </div>

        `;

      }


      item.innerHTML = `

        <div class="dot">
          ♥
        </div>

        <div class="paper">

          ${photoHTML}

          <p class="date">
            ${memory.date}
          </p>

          <h3 class="serif">
            ${memory.title}
          </h3>

          <p class="t">
            ${memory.text}
          </p>

        </div>

      `;


      timeline.appendChild(item);

    }
  );


  /* ===============================
     ALBUM
     SUPABASE VERSION
  =============================== */

  const albumInput =
    document.getElementById("albumInput");

  const albumGrid =
    document.getElementById("albumGrid");

  const albumEmpty =
    document.getElementById("albumEmpty");

  const clearAlbum =
    document.getElementById("clearAlbum");


  /*
     We don't use the old
     "Clear album" button.
  */

  if (clearAlbum) {

    clearAlbum.classList.add("hidden");

  }


  /* ===============================
     DEFAULT MEMORY DELETIONS
  =============================== */

  let deletedMemoryPhotos =
    JSON.parse(
      localStorage.getItem(
        "deletedMemoryPhotos"
      )
    ) || [];


  function isMemoryDeleted(index) {

    return deletedMemoryPhotos.includes(
      index
    );

  }


  /* ===============================
     CREATE ALBUM CARD
  =============================== */

  function createAlbumCard(
    image,
    title,
    date,
    deleteFunction
  ) {

    const card =
      document.createElement("div");


    card.className =
      "ph-card reveal";


    card.innerHTML = `

      <img
        src="${image}"
        alt="${title}"
      >

      <div style="
        padding:.6rem .4rem .4rem;
        text-align:center;
      ">

        <p class="date">
          ${date}
        </p>

        <p
          class="serif"
          style="
            font-size:1.25rem;
            margin-top:.25rem;
          "
        >
          ${title}
        </p>

      </div>

      <button
        type="button"
        class="delete-photo"
        title="Delete photo"
      >
        ×
      </button>

    `;


    const deleteButton =
      card.querySelector(
        ".delete-photo"
      );


    deleteButton.addEventListener(
      "click",
      async function (event) {

        event.stopPropagation();

        await deleteFunction();

      }
    );


    albumGrid.appendChild(card);

  }


  /* ===============================
     RENDER ALBUM
  =============================== */

  async function renderAlbum() {

    albumGrid.innerHTML = "";


    /* ===============================
       DEFAULT MEMORY PHOTOS
    =============================== */

    MEMORIES.forEach(
      function (memory, index) {

        if (
          memory.photo &&
          !isMemoryDeleted(index)
        ) {

          createAlbumCard(

            memory.photo,

            memory.title,

            memory.date,

            async function () {

              deletedMemoryPhotos.push(
                index
              );


              localStorage.setItem(
                "deletedMemoryPhotos",
                JSON.stringify(
                  deletedMemoryPhotos
                )
              );


              await renderAlbum();

            }

          );

        }

      }
    );


    /* ===============================
       LOAD SHARED PHOTOS
       FROM SUPABASE
    =============================== */

    const {
      data,
      error
    } = await supabase
      .from("album_photos")
      .select("*")
      .order(
        "created_at",
        {
          ascending: true
        }
      );


    if (error) {

      console.error(
        "Could not load album photos:",
        error
      );

      albumEmpty.classList.remove(
        "hidden"
      );

      return;

    }


    /* ===============================
       DISPLAY SHARED PHOTOS
    =============================== */

    data.forEach(function (photo) {

      createAlbumCard(

        photo.photo_url,

        photo.file_name ||
          "Our memory",

        "OUR MEMORY ♥",

        async function () {

          await deleteSupabasePhoto(
            photo
          );

        }

      );

    });


    /* ===============================
       CHECK EMPTY ALBUM
    =============================== */

    const memoryPhotosLeft =
      MEMORIES.some(
        function (memory, index) {

          return (
            memory.photo &&
            !isMemoryDeleted(index)
          );

        }
      );


    const uploadedPhotosLeft =
      data.length > 0;


    const hasPhotos =
      memoryPhotosLeft ||
      uploadedPhotosLeft;


    if (hasPhotos) {

      albumEmpty.classList.add(
        "hidden"
      );

    }

    else {

      albumEmpty.classList.remove(
        "hidden"
      );

    }


    revealElements();

  }


  /* ===============================
     DELETE SUPABASE PHOTO
  =============================== */

  async function deleteSupabasePhoto(
    photo
  ) {

    try {

      /*
         Delete image from
         Supabase Storage
      */

      const {
        error: storageError
      } = await supabase
        .storage
        .from(STORAGE_BUCKET)
        .remove([
          photo.file_path
        ]);


      if (storageError) {

        console.error(
          "Storage delete error:",
          storageError
        );

        alert(
          "Could not delete the photo."
        );

        return;

      }


      /*
         Delete database record
      */

      const {
        error: databaseError
      } = await supabase
        .from("album_photos")
        .delete()
        .eq(
          "id",
          photo.id
        );


      if (databaseError) {

        console.error(
          "Database delete error:",
          databaseError
        );

        alert(
          "Photo file was deleted, but its record could not be removed."
        );

        return;

      }


      await renderAlbum();

    }

    catch (error) {

      console.error(
        "Delete error:",
        error
      );

      alert(
        "Something went wrong while deleting the photo."
      );

    }

  }


  /* ===============================
     ADD PHOTOS
  =============================== */

  albumInput.addEventListener(
    "change",
    async function () {

      const files =
        Array.from(
          albumInput.files
        );


      if (!files.length) {

        return;

      }


      /*
         Upload each selected photo
      */

      for (const file of files) {

        try {

          /* ===============================
             CREATE UNIQUE FILE NAME
          =============================== */

          const fileName =
            `${Date.now()}-${Math.random()
              .toString(36)
              .substring(2, 10)}-${file.name}`;


          const filePath =
            `album/${fileName}`;


          /* ===============================
             UPLOAD TO SUPABASE STORAGE
          =============================== */

          const {
            error: uploadError
          } = await supabase
            .storage
            .from(STORAGE_BUCKET)
            .upload(
              filePath,
              file,
              {
                cacheControl: "3600",
                upsert: false
              }
            );


          if (uploadError) {

            console.error(
              "Upload error:",
              uploadError
            );

            alert(
              `Could not upload ${file.name}`
            );

            continue;

          }


          /* ===============================
             GET PUBLIC URL
          =============================== */

          const {
            data: publicUrlData
          } = supabase
            .storage
            .from(STORAGE_BUCKET)
            .getPublicUrl(
              filePath
            );


          const photoUrl =
            publicUrlData.publicUrl;


          /* ===============================
             SAVE PHOTO IN DATABASE
          =============================== */

          const {
            error: databaseError
          } = await supabase
            .from("album_photos")
            .insert([
              {
                file_name:
                  file.name,

                file_path:
                  filePath,

                photo_url:
                  photoUrl
              }
            ]);


          if (databaseError) {

            console.error(
              "Database error:",
              databaseError
            );

            alert(
              `Photo uploaded but could not be saved: ${file.name}`
            );

            continue;

          }

        }

        catch (error) {

          console.error(
            "Photo upload error:",
            error
          );

          alert(
            `Something went wrong with ${file.name}`
          );

        }

      }


      /*
         Reset file input
      */

      albumInput.value = "";


      /*
         Reload shared album
      */

      await renderAlbum();

    }
  );


  /* ===============================
     NOTE
  =============================== */

  const noteTitle =
    document.getElementById(
      "noteTitle"
    );

  const noteText =
    document.getElementById(
      "noteText"
    );


  noteTitle.textContent =
    NOTE_TITLE;


  noteText.innerHTML =
    NOTE_TEXT
      .trim()
      .split("\n")
      .map(function (line) {

        if (
          line.trim() === ""
        ) {

          return "<br>";

        }


        return `
          <span>
            ${line}
          </span>
          <br>
        `;

      })
      .join("");


  /* ===============================
     SCROLL REVEAL
  =============================== */

  function revealElements() {

    document
      .querySelectorAll(".reveal")
      .forEach(
        function (element) {

          const rect =
            element.getBoundingClientRect();


          if (
            rect.top <
            window.innerHeight - 60
          ) {

            element.classList.add(
              "in"
            );

          }

        }
      );

  }


  window.addEventListener(
    "scroll",
    revealElements
  );


  revealElements();


  /* ===============================
     FLOATING HEARTS
  =============================== */

  const floatingContainers =
    document.querySelectorAll(
      ".floating"
    );


  function createFloatingHeart() {

    floatingContainers.forEach(
      function (container) {

        const heart =
          document.createElement(
            "span"
          );


        heart.className =
          "float-item";


        heart.textContent =
          Math.random() > 0.5
            ? "♥"
            : "♡";


        heart.style.left =
          `${Math.random() * 100}%`;


        heart.style.animationDuration =
          `${6 + Math.random() * 7}s`;


        heart.style.fontSize =
          `${10 + Math.random() * 15}px`;


        container.appendChild(
          heart
        );


        setTimeout(
          function () {

            heart.remove();

          },
          14000
        );

      }
    );

  }


  setInterval(
    createFloatingHeart,
    1200
  );


  /* ===============================
     HEART BURST
  =============================== */

  function createHeartBurst() {

    for (
      let i = 0;
      i < 25;
      i++
    ) {

      const heart =
        document.createElement(
          "span"
        );


      heart.textContent =
        "♥";


      heart.style.position =
        "fixed";

      heart.style.zIndex =
        "10000";

      heart.style.left =
        "50%";

      heart.style.top =
        "50%";

      heart.style.color =
        "#d9798a";

      heart.style.pointerEvents =
        "none";


      heart.style.setProperty(
        "--x",
        `${(Math.random() - 0.5) * 500}px`
      );


      heart.style.setProperty(
        "--y",
        `${(Math.random() - 0.5) * 500}px`
      );


      heart.style.animation =
        "heartBurst 1.2s ease-out forwards";


      document.body.appendChild(
        heart
      );


      setTimeout(
        function () {

          heart.remove();

        },
        1300
      );

    }

  }


  /* ===============================
     PARALLAX
  =============================== */

  const parallax =
    document.getElementById(
      "parallax"
    );


  if (parallax) {

    window.addEventListener(
      "scroll",
      function () {

        const scroll =
          window.scrollY;


        parallax.style.transform =
          `translateY(${scroll * 0.15}px)`;

      }
    );

  }


  /* ===============================
     START
  =============================== */

  renderAlbum();


  console.log(
    "Our Little World loaded successfully ♡"
  );

});