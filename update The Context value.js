
<!DOCTYPE html>
<html>
    <head>
        <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    </head>
    <div id="root"></div>
    <script type="text/babel">

      const Context = React.createContext()

      class Provider extends React.Component {
        state = {
          name: "Snowtooth Mountain",
          status: "OPEN"
        }
        render() {
          return (
            <Context.Provider value={{
              state: this.state,
              changeStatus: () => this.setState({
                status: "CLOSED"
              })
            }}>
              {this.props.children}
            </Context.Provider>
          )
        }
      }


      const Trail = props => (
        <div>
          <Context.Consumer>
            {(context) => (
              <div>
                <p>This is the context: {context.state.name}</p>
                <p>The resort is: {context.state.status}</p>
                <button onClick={context.changeStatus}>Close Resort</button>
              </div>
            )}
          </Context.Consumer>
        </div>
      )

      const Lift = props => (
        <div>
          <Trail />
        </div>
      )

      class Resort extends React.Component {
        render() {
          return (
            <Provider>
              <div>
                <Lift />
              </div>
            </Provider>
          )
        }
      }

      ReactDOM.render(
        <Resort />,
        document.getElementById('root')
      )

    </script>
</html>
