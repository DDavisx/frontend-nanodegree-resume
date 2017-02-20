var bio = {
    "name": "Daniel Davis",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "dan.davis.x@gmail.com",
        "github": "https://github.com/DDavisx",
        "location": "Copper Harbor, MI"
    },
    "biopic": "images/thundarr.jpg",
    "welcomeMessage": "Hello!, thank you for your time and for considering me for this position. This resume will point out many great skills and qualities that I will bring to your company if you choose me.",
    "skills": ["Sword fighting", "3D animation", "css compilers ( sass, less )", "javascript", "e-commerce"]
};

var work = {
    "jobs": [{
        "employer": "Blue Lobster Media",
        "title": "3D Animator",
        "location": "110 S Bridge St, Dimondale, MI 48821",
        "dates": "2002-2007",
        "description": "Create and Develop Marketing for the Electrical Industry. This would include but was not limited to 3D animation, Web Design, Video."
    }, {
        "employer": "Middle of No-Software",
        "title": "Developer",
        "location": "Co Rd 17, Equality, IL 62934",
        "dates": "2007-2012",
        "description": "Create and Maintain current content management System. Providing Support to internal contributors."
    }, {
        "employer": "Middle of No-Software",
        "title": "Manager",
        "location": "Elkader, IA",
        "dates": "2012-present",
        "description": "Facilitate and manage a group of highly skilled development staff. Organize and Communicate the progress of the current project to Stakeholders."
    }]
};

var projects = {
    projects: [{
            "title": "Sandy Beach to Go",
            "dates": "2001-2004",
            "description": "Provide and build a solution that provides Beach side service from a mobile device.",
            "images": ["images/jamaica.jpg", "images/aruba.jpg"]
        },
        {
            "title": "Cool Logo Maker",
            "dates": "2002-2003",
            "description": "Allow creative people to deploy and implement fully qualified logos easily",
            "images": ["images/f.png", "images/up.png"]
        },
    ]
};

var education = {
    "schools": [{
        "name": "Lansing Community College",
        "location": "309 N Washington Square, Lansing, MI 48933",
        "degree": "AAA, Computer Graphics Mulitmedia",
        "majors": ["3D Animation", "Videography"],
        "dates": "1996-1999",
        "url": "http://www.lcc.edu/"
    }, {
        "name": "Michigan State University",
        "location": "220 Trowbridge Rd, East Lansing, MI 48824",
        "degree": "BA, Advertising",
        "majors": ["Communication Studies"],
        "dates": "2000-2004",
        "url": "https://msu.edu/"
    }],
    "onlineCourses": [{
            "title": "Become a Cloud Developer",
            "school": "Lynda.com",
            "dates": "2014-2015",
            "url": "https://www.lynda.com"
        },
        {
            "title": "Up and Running with Azure",
            "school": "Lynda.com",
            "dates": "2015-2016",
            "url": "https://www.lynda.com"
        }
    ]
};

var resumeUtils = function() {
    var dataReplacer = function(HtmlFormatter, value) {
        return HtmlFormatter.replace('%data%', value);
    };

    var HtmlAppender = function(item) {
        if (!item.isAppend) {
            $(item.id).prepend(dataReplacer(item.formatter, item.value));
        } else {
            $(item.id).append(dataReplacer(item.formatter, item.value));
        }
    };

    return {
        dataReplacer: dataReplacer,
        HtmlAppender: HtmlAppender
    };
}();

bio.display = function() {
    var skillBuilder = function(item) {
        $('#skills').append(resumeUtils.dataReplacer(HTMLskills, item));
    };

    var bioMapper = [{
            formatter: HTMLheaderRole,
            value: bio.role,
            id: '#header',
            isAppend: 0
        },
        {
            formatter: HTMLheaderName,
            value: bio.name,
            id: '#header',
            isAppend: 0
        },
        {
            formatter: HTMLbioPic,
            value: bio.biopic,
            id: '#header',
            isAppend: 1
        },
        {
            formatter: HTMLwelcomeMsg,
            value: bio.welcomeMessage,
            id: '#header',
            isAppend: 1
        },
        {
            formatter: HTMLmobile,
            value: bio.contacts.mobile,
            id: '#topContacts,#footerContacts',
            isAppend: 1
        },
        {
            formatter: HTMLemail,
            value: bio.contacts.mobile,
            id: '#topContacts,#footerContacts',
            isAppend: 1
        },
        {
            formatter: HTMLgithub,
            value: bio.contacts.github,
            id: '#topContacts,#footerContacts',
            isAppend: 1
        },
        {
            formatter: HTMLlocation,
            value: bio.contacts.location,
            id: '#topContacts,#footerContacts',
            isAppend: 1
        },
    ];

    bioMapper.forEach(resumeUtils.HtmlAppender);
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(skillBuilder);
};

work.display = function() {
    var linkBuilder = function(employer, title) {
        return resumeUtils.dataReplacer(HTMLworkEmployer, employer) + resumeUtils.dataReplacer(HTMLworkTitle, title);
    };

    var jobBuilder = function(item) {
        $('.work-entry').append(linkBuilder(item.employer, item.title));
        $('.work-entry').append(resumeUtils.dataReplacer(HTMLworkDates, item.dates));
        $('.work-entry').append(resumeUtils.dataReplacer(HTMLworkLocation, item.location));
        $('.work-entry').append(resumeUtils.dataReplacer(HTMLworkDescription, item.description));
    };

    $('#workExperience').append(HTMLworkStart);
    work.jobs.reverse().forEach(jobBuilder);
};

projects.display = function() {
    var projectBuilder = function(item) {
        $('.project-entry').append(resumeUtils.dataReplacer(HTMLprojectTitle, item.title));
        $('.project-entry').append(resumeUtils.dataReplacer(HTMLprojectDates, item.dates));
        $('.project-entry').append(resumeUtils.dataReplacer(HTMLprojectDescription, item.description));

        item.images.forEach(function(img) {
            $('.project-entry').append(resumeUtils.dataReplacer(HTMLprojectImage, img));
        });

    };
    $('#projects').append(HTMLprojectStart);
    projects.projects.forEach(projectBuilder);
};

education.display = function() {
    var schoolBuilder = function(item) {
        $('.education-entry').append(resumeUtils.dataReplacer(HTMLschoolName, item.name) + resumeUtils.dataReplacer(HTMLschoolDegree, item.degree));
        $('.education-entry').append(resumeUtils.dataReplacer(HTMLschoolDates, item.dates));
        $('.education-entry').append(resumeUtils.dataReplacer(HTMLschoolLocation, item.location));
        $('.education-entry').append(resumeUtils.dataReplacer(HTMLschoolMajor, item.majors.join(', ')));
    };

    var onlineCourseBuilder = function(item) {
        $('.online').append(resumeUtils.dataReplacer(HTMLonlineTitle, item.title) + resumeUtils.dataReplacer(HTMLonlineSchool, item.school));
        $('.online').append(resumeUtils.dataReplacer(HTMLonlineDates, item.dates));
        $('.online').append(resumeUtils.dataReplacer(HTMLonlineURL, item.url));
    };

    $('#education').append(HTMLschoolStart);
    education.schools.forEach(schoolBuilder);
    $('#education').append(HTMLonlineClasses);
    var HTMLonlineCourseStart = HTMLschoolStart.replace('education-entry', 'online education-entry');
    $('#education').append(HTMLonlineCourseStart);
    education.onlineCourses.forEach(onlineCourseBuilder);
};

var inititializeResume = function() {
    bio.display();
    projects.display();
    education.display();
    work.display();
    $('#mapDiv').append(googleMap);
}();
