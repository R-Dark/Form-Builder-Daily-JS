// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator

function dataLoop() {

    let fieldsDiv = document.querySelector("#fields")

    for (var i = 0; i < formData.length; i++) {
        let userInfo = formData[i]
        if (userInfo.type == "textarea") {
            let textarea = document.createElement("textarea")
            textarea.type = userInfo.type
            textarea.placeholder = userInfo.label
            textarea.id = userInfo.id
            fieldsDiv.append(textarea)
        } else if (userInfo.type == "select") {
            let select = document.createElement("select")
            select.type = userInfo.type
            select.placeholder = userInfo.label
            select.id = userInfo.id
            fieldsDiv.append(select)

            for (var j = 0; j < userInfo.options.length; j++) {
                let option = document.createElement("option")
                let langOptions = userInfo.options[j]
                console.log(langOptions)
                option.value = langOptions.value
                option.label = langOptions.label
                select.append(option)
            }

        } else {
            let textbox = document.createElement("input")
            textbox.type = userInfo.type
            textbox.placeholder = userInfo.label
            textbox.id = userInfo.id
            fieldsDiv.append(textbox)
        }
    }
};

dataLoop()
