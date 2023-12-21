import {
  createHandler,
  renderAsync,
  StartServer,
} from "solid-start/entry-server";
// The following import breaks the build
import '@auth/solid-start'

export default createHandler(
  renderAsync((event) => <StartServer event={event} />)
);
