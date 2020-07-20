# Nimiq Ruby RPC Client

> Ruby implementation of the Nimiq RPC client specs.

## Info

Nimiq Ruby RPC client. It will allow you to interact with the Nimiq Blockchain, to collect data, sync with the network etc.. This library covers all the current [Nimiq JSON-RPC specification](https://github.com/nimiq/core-js/wiki/JSON-RPC-API#remotejs-client).

# What is Nimiq?

Inspired by the Bitcoin, Nimiq is a blockchain / cryptocurrency that runs in your browser seamlessly.

Fast, easy and fun to use, for more information visit the [Nimiq website](https://www.nimiq.com/).

### Usage

Example to use this ruby client:

```ruby
options = {
  host: "http://127.0.0.1",
  port: "8000",
  # user: "user",
  # pass: "pass",
  # uri: "http://USER:PASS@IP:PORT",
}
nimiq = Nimiq::Client.new(options)
consensus = nimiq.consensus()
get_balance = nimiq.get_balance("NQ27 B9ED 98G5 3VH7 FY8D BFP0 XNF4 BD8L TN4B")

puts "Consensus #{consensus}"
puts "My account balance #{get_balance}"
```

## Development

This section is for developments. If you only want to use this client go to the [Usage](#Usage) section. After cloning the repo, run `bundle` to install the required dependencies. For testing it requires a running Nimiq RPC node, to connect to. You can then run tests by typing `rspec --format documentation`.

For a private node connection that require a username/password, don't forget to set these in the configuration spec file.

## Contributions

This implementation was originally contributed by [jxdv](https://github.com/jxdv/).

Bug reports and pull requests are welcome.

## License

[Apache 2.0](LICENSE)
