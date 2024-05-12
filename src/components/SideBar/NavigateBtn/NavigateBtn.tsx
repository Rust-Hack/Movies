import { Tabs } from '@mantine/core';
// import './NavigateBtn.css';

const NavigateBtn = () => {

    return (
        <div>
            <Tabs color="rgba(229, 213, 250)" variant="pills" radius="md" orientation="vertical" defaultValue="gallery">
                <Tabs.List>
                    <Tabs.Tab value="gallery">
                    Gallery
                    </Tabs.Tab>
                    <Tabs.Tab value="messages">
                    Messages
                    </Tabs.Tab>
                    <Tabs.Tab value="settings">
                    Settings
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">
                    Gallery tab content
                </Tabs.Panel>

                <Tabs.Panel value="messages">
                    Messages tab content
                </Tabs.Panel>

                <Tabs.Panel value="settings">
                    Settings tab content
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default NavigateBtn;