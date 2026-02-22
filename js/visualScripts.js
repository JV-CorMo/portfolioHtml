   // Typing animation
        const text = "JvCorMo desarrollo de aplicaciones";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                document.getElementById("typing").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 70);
            }
        }
        typeWriter();

        // Reveal sections on scroll
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => observer.observe(section));

        // Theme toggle
        function toggleTheme() {
            document.body.classList.toggle("light");
        }