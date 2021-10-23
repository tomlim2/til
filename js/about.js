let animationContainer = document.getElementById('my-animation');
    let loadAnimation = jlottie.loadAnimation({
        container: animationContainer,
        loop: false,
        autoplay: false,
        path: '{{site.baseurl}}/js/jlottie-test-1.json',
    });

    let item7Container = document.getElementById('item7');

    item7Container.addEventListener("click", () => {
        jlottie.play(animationContainer.id);
    });
    item7Container.addEventListener("onLoopComplete", () => {
        jlottie.goToAndStop(0, true, animationContainer.id);
    });
    item7Container.addEventListener("mouseover", () => {
        animationContainer.classList.remove("black-filter");
        animationContainer.classList.add("gary-filter");
    });
    item7Container.addEventListener("mouseleave", () => {
        animationContainer.classList.remove("gary-filter");
        animationContainer.classList.add("black-filter");
    });

    const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "12-10-1815";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);