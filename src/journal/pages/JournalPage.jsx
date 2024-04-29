import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"


export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <Typography >Nostrud nulla commodo sint ut tempor veniam aute qui occaecat incididunt adipisicing sunt consequat irure. Culpa eu anim aliquip velit ut. Nulla exercitation et reprehenderit proident adipisicing non est occaecat.</Typography> */}

            {/* NothinSelected */}
            <NothingSelectedView />
            {/* NoteView */}
        </JournalLayout>
    )
}
