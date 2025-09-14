export default function TechStack() {

    return (
        <>
            <h2>Tech stack</h2>
            <p>Here is a list of libraries and technologies Copper-Engine relies on.</p>
            <br/>
            <br/>
            
            <h3>Core</h3>
            <ul>
                <li><p><b>spdlog</b> - Logging</p></li>
                <li><p><b>yaml-cpp</b> - C++ YAML parser and emitter</p></li>
            </ul>
            <br/>

            <br/>
            <h3>Renderer</h3>
            <ul>
                <li><p><b>OpenGL</b> - Rendering backend. Support for DirectX and Vulkan is currently not available, but planned for a future release.</p></li>
                <li><p><b>GLFW</b> - Window creation.</p></li>
                <li><p><b>ImGui</b> - UI interface. Planned to be replaced by a custom UI system.</p></li>
            </ul>
            <br/>

            <br/>
            <h3>Physics</h3>
            <ul>
                <li><p><b>PhysX</b> - Physics engine. A custom physics engine as a replacement, or another choice is possible.</p></li>
            </ul>
            <br/>

            <br/>
            <h3>Scripting Engine</h3>
            <ul>
                <li><p><b>mono</b> - C# scripting backend. Soon to be replaced.</p></li>
            </ul>
            <br/>

            <br/>
            <h3>Editor</h3>
            <ul>
                <li><p><b>ImGuizmo</b> - Editor gizmos.</p></li>
                <li><p><b>assimp</b> - 3D model file importer.</p></li>
            </ul>
            <br/>

            <br/>
            <h3>Proprietary libraries</h3>
            <ul>
                <li><p><b>CopperECS</b> - Entity Component System.</p></li>
                <li><p><b>Copper-Math</b> - shit math library. Needs to be replaced asap.</p></li>
            </ul>
            <br/>

            <br/>
            <h3>Utilities</h3>
            <ul>
                <li><p><b>stb</b> - Image loading</p></li>
                <li><p><b>portable-file-dialogs</b> - Platform indenpendent file dialogs.</p></li>
            </ul>
            <br/>

            <br/>
            <h3>Project generation</h3>
            <ul>
                <li><p><b>Premake</b> - project files generator</p></li>
                <li><p><b>CMake</b> - project files generator</p></li>
            </ul>
        </>
    )

}
