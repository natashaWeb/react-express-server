const messages = {
    sectionOne: {
        title: "Triage is first aid for your inbox.",
        text: "Everything you loved about the original Triage is back - only better. Download Triage 2 on the App Store today",
    },
};

const messageController = {
    read(req, res) {
        try {
            res.json(messages.sectionOne).status(200);
        } catch (error) {
            let errorMessages = {
                sectionOne: {
                    title: "Server error.",
                    text: "Server error.",
                },
            };
            res.json(errorMessages.sectionOne).status(500);
        }
    },
};

module.exports = messageController;
