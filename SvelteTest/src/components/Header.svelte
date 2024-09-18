<script>
    export let y;

    export let tabs = [
        { name: "Github ", link: "https://github.com/JacobHartel" },
        { name: "About me", link: "#about" },
        { name: "Blog", link: "https://open.substack.com/pub/jacobhartel/p/books-list?r=4frd4s&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" },
        
    ];
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">Jacob</b> <span class="">Hartel</span>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
                target={index === 2 ? "_blank" : ""}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        
    </div>
</header>