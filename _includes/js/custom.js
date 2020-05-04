

jtd.onReady(() => {
    if (window.location.href.indexOf("external") >= 0) {
        // this is being served publically so modify the site to hide things that are 
        //  not accessible.

        // Hide anything in the navigation list
        document.querySelectorAll("ul.navigation-list li:not(.public)").forEach((li) => {
            li.classList.add(["protected-node"]);
        });

        // Hide the search bar
        document.querySelectorAll(".search").forEach((search) => {
            search.classList.add(["protected-node"]);
        })

        // Decorate links that do NOT have the public class.
        document.querySelectorAll("a:not(.public)").forEach((a)=> {
            // don't add local leaks.
            console.log(a.href);
            if (!a.getAttribute('href').startsWith('#')) {
                console.log('adding class');
                a.classList.add(["protected-link"]);
            }
        });
    }
});