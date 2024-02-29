

const Left = () => Widget.Box({
    children: {

    }
})

const Middle = () => Widget.Box({
    children: {

    }
})

const Right = () => Widget.Box({
    children: {

    }
})

export const Bar = (monitor = 0) => Widget.Window({
    name: `bar-${monitor}`,
    class_name: 'bar',
    monitor,
    anchor: ['top', 'left', 'right'],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
        start_widget: Left(),
        center_widget: Middle(),
        end_widget: Right()
    })
})

