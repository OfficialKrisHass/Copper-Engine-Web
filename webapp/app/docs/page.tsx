import { config } from "@/config";

import styles from "./page.module.css"

export default async function Docs() {

    const data = await fetch("http://127.0.0.1:8080/", { next: { revalidate: config.RevalidateTime }});
    const text = await data.text();

    return (
        <>
            <h2>Welcome to the Copper-Engine Documentation.</h2>
            <p>Here you will find all the classes, functions, enums that are part of any of the Copper-Engine projects. Each described in (I think) good detail
            from function to example use</p>
            <br/>
            <p>On the left you can see a sidebar for navigating the Copper-Engine documentation. The documentation is organized based on the filesystem structure of
            the project where each entry is a folder containing more folders, or documentation entries.</p>
            <br/>
            <p>Each entry is either a header file, or a class/group of notable items. E.g. <code>Engine/Core/Window</code> contains both the class <code>Window</code> found in
            <code> Engine/Core/Window.h</code>, plus functions such as <code>GetMainWindow()</code>, <code>GetMainWindowSize()</code>. But not contianing <code>WindowData</code>, which is a separate entry.
            <code>Engine/Core/Args</code> contains all of the contents of the header file found at <code>Engine/Core/Args.h</code>.</p>
            <br/>
            <p>Functions are only mentioned in entries, and link to an actual page describing the function in further detail including an example use (unless
            it's an internal function that shouldn't be used)</p>
            <br/>
            <p>You can also search for specific entries, classes, or even functions using the search bar (which I will implement when I can be arsed to do
            so, I SWEAR)</p>
            <br/>
            <p>You are always welcome to update or add documentation as I have to do it manually at the moment, which is prone to leave in faulty information or
            straight up not adding a new entry. You can always submit a request on github with the changes and I will try to update it to the site ASAP (pinkie promise)</p>
            <br/>
            <pre>
                {text}
            </pre>
        </>
    )

}
