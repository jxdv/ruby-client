var search_data = {"index":{"searchIndex":["api","clientrpc","connect","error","nimiq","client","accounts()","block_number()","consensus()","constant()","create_account()","create_raw_transaction()","get_account()","get_balance()","get_block_by_hash()","get_block_by_number()","get_block_template()","get_block_transaction_count_by_hash()","get_block_transaction_count_by_number()","get_transaction_by_block_hash_and_index()","get_transaction_by_block_number_and_index()","get_transaction_by_hash()","get_transaction_receipt()","get_transactions_by_address()","get_work()","hashrate()","log()","mempool()","mempool_content()","min_fee_per_byte()","miner_address()","miner_threads()","mining()","new()","peer_count()","peer_list()","peer_state()","ping()","pool()","pool_confirmed_balance()","pool_connection_state()","request()","send_raw_transaction()","send_transaction()","submit_block()","syncing()","gemfile","gemfile.lock","license","rakefile","setup","readme"],"longSearchIndex":["api","clientrpc","clientrpc::connect","clientrpc::connect::error","nimiq","nimiq::client","api#accounts()","api#block_number()","api#consensus()","api#constant()","api#create_account()","api#create_raw_transaction()","api#get_account()","api#get_balance()","api#get_block_by_hash()","api#get_block_by_number()","api#get_block_template()","api#get_block_transaction_count_by_hash()","api#get_block_transaction_count_by_number()","api#get_transaction_by_block_hash_and_index()","api#get_transaction_by_block_number_and_index()","api#get_transaction_by_hash()","api#get_transaction_receipt()","api#get_transactions_by_address()","api#get_work()","api#hashrate()","api#log()","api#mempool()","api#mempool_content()","api#min_fee_per_byte()","api#miner_address()","api#miner_threads()","api#mining()","nimiq::client::new()","api#peer_count()","api#peer_list()","api#peer_state()","nimiq::client#ping()","api#pool()","api#pool_confirmed_balance()","api#pool_connection_state()","nimiq::client#request()","api#send_raw_transaction()","api#send_transaction()","api#submit_block()","api#syncing()","","","","","",""],"info":[["Api","","Api.html","","<p>Copyright 2020 Nimiq community.\n<p>Licensed under the Apache License, Version 2.0 (the “License”); …\n"],["ClientRPC","","ClientRPC.html","",""],["ClientRPC::Connect","","ClientRPC/Connect.html","",""],["ClientRPC::Connect::Error","","ClientRPC/Connect/Error.html","",""],["Nimiq","","Nimiq.html","",""],["Nimiq::Client","","Nimiq/Client.html","",""],["accounts","Api","Api.html#method-i-accounts","()","<p>accounts - Returns a list of addresses owned by client.\n"],["block_number","Api","Api.html#method-i-block_number","()","<p>block_number - Returns the height of most recent block.\n"],["consensus","Api","Api.html#method-i-consensus","()","<p>consensus - Returns information on the current consensus state.\n"],["constant","Api","Api.html#method-i-constant","(name, value = nil)","<p>constant - Returns or overrides a constant value. When no parameter is given, it returns the value of …\n"],["create_account","Api","Api.html#method-i-create_account","()","<p>create_account - Creates a new account and stores its private key in the client store.\n"],["create_raw_transaction","Api","Api.html#method-i-create_raw_transaction","(transaction)","<p>create_raw_transaction - Creates and signs a transaction without sending it. The transaction can then …\n"],["get_account","Api","Api.html#method-i-get_account","(address)","<p>get_account - Returns details for the account of given address.\n<p>@param [String] address - Address to get …\n\n"],["get_balance","Api","Api.html#method-i-get_balance","(address)","<p>get_balance - Returns the balance of the account of given address.\n<p>@param [String] address - Address to …\n\n"],["get_block_by_hash","Api","Api.html#method-i-get_block_by_hash","(block_hash, full_transactions = nil)","<p>get_block_by_hash - Returns information about a block by hash.\n<p>@param [String] block_hash - Hash of the …\n"],["get_block_by_number","Api","Api.html#method-i-get_block_by_number","(block_number, full_transactions = nil)","<p>get_block_by_number - Returns information about a block by block number.\n<p>@param [Integer] block_number …\n"],["get_block_template","Api","Api.html#method-i-get_block_template","(address = nil, dada_field = nil)","<p>get_block_template - Returns a template to build the next block for mining. This will consider pool instructions …\n"],["get_block_transaction_count_by_hash","Api","Api.html#method-i-get_block_transaction_count_by_hash","(block_hash)","<p>get_block_transaction_count_by_hash - Returns the number of transactions in a block from a block matching …\n"],["get_block_transaction_count_by_number","Api","Api.html#method-i-get_block_transaction_count_by_number","(block_number)","<p>get_block_transaction_count_by_number - Returns the number of transactions in a block matching the given …\n"],["get_transaction_by_block_hash_and_index","Api","Api.html#method-i-get_transaction_by_block_hash_and_index","(block_hash, transaction_index)","<p>get_transaction_by_block_hash_and_index - Returns information about a transaction by block hash and transaction …\n"],["get_transaction_by_block_number_and_index","Api","Api.html#method-i-get_transaction_by_block_number_and_index","(block_height, transaction_index)","<p>get_transaction_by_block_number_and_index - Returns information about a transaction by block number and …\n"],["get_transaction_by_hash","Api","Api.html#method-i-get_transaction_by_hash","(transaction_hash)","<p>get_transaction_by_hash - Returns the information about a transaction requested by transaction hash. …\n"],["get_transaction_receipt","Api","Api.html#method-i-get_transaction_receipt","(transaction_hash)","<p>get_transaction_receipt - Returns the receipt of a transaction by transaction hash. Note That the receipt …\n"],["get_transactions_by_address","Api","Api.html#method-i-get_transactions_by_address","(address, transactions_number = nil)","<p>get_transactions_by_address - Returns the latest transactions successfully performed by or for an address. …\n"],["get_work","Api","Api.html#method-i-get_work","(address = nil, dada_field = nil)","<p>get_work - Returns instructions to mine the next block. This will consider pool instructions when connected …\n"],["hashrate","Api","Api.html#method-i-hashrate","()","<p>hashrate - Returns the number of hashes per second that the node is mining with.\n"],["log","Api","Api.html#method-i-log","(tag, log_level)","<p>log - Sets the log level of the node.\n<p>@param [String] tag - If the tag is &#39;*&#39; the log level will …\n"],["mempool","Api","Api.html#method-i-mempool","()","<p>mempool - Returns information on the current mempool situation. This will provide an overview of the …\n"],["mempool_content","Api","Api.html#method-i-mempool_content","()","<p>mempool_content - Returns transactions that are currently in the mempool.\n"],["min_fee_per_byte","Api","Api.html#method-i-min_fee_per_byte","(set_min_fee = nil)","<p>min_fee_per_byte - Returns or sets the minimum fee per byte.\n<p>@param [Integer] set_min_fee (optional) - …\n\n"],["miner_address","Api","Api.html#method-i-miner_address","()","<p>miner_address - Returns the miner address.\n"],["miner_threads","Api","Api.html#method-i-miner_threads","(set_threads = nil)","<p>miner_threads - Returns or sets the number of CPU threads for the miner.\n<p>@param [Integer] set_threads …\n\n"],["mining","Api","Api.html#method-i-mining","()","<p>mining - Returns `true` if client is actively mining new blocks.\n"],["new","Nimiq::Client","Nimiq/Client.html#method-c-new","(opts)",""],["peer_count","Api","Api.html#method-i-peer_count","()","<p>peer_count - Returns number of peers currently connected to the client.\n"],["peer_list","Api","Api.html#method-i-peer_list","()","<p>peer_list - Returns list of peers known to the client.\n"],["peer_state","Api","Api.html#method-i-peer_state","(peer_address)","<p>peer_state - Returns the state of the peer.\n<p>@param [String] peer_address - The address of the peer.\n\n"],["ping","Nimiq::Client","Nimiq/Client.html#method-i-ping","()","<p>Ping the Nimiq node.\n"],["pool","Api","Api.html#method-i-pool","(pool_address = nil)","<p>pool - Returns or sets the mining pool. When no parameter is given, it returns the current mining pool. …\n"],["pool_confirmed_balance","Api","Api.html#method-i-pool_confirmed_balance","()","<p>pool_confirmed_balance - Returns the confirmed mining pool balance.\n"],["pool_connection_state","Api","Api.html#method-i-pool_connection_state","()","<p>pool_connection_state - Returns the connection state to mining pool.\n"],["request","Nimiq::Client","Nimiq/Client.html#method-i-request","(name, params = nil)","<p>Sends a raw request to the Nimiq node.\n"],["send_raw_transaction","Api","Api.html#method-i-send_raw_transaction","(signed_transaction)","<p>send_raw_transaction - Sends a signed message call transaction or a contract creation, if the data field …\n"],["send_transaction","Api","Api.html#method-i-send_transaction","(transaction)","<p>send_transaction - Creates new message call transaction or a contract creation, if the data field contains …\n"],["submit_block","Api","Api.html#method-i-submit_block","(block)","<p>submit_block - Submits a block to the node. When the block is valid, the node will forward it to other …\n"],["syncing","Api","Api.html#method-i-syncing","()","<p>syncing - Returns an object with data about the sync status or `false`.\n"],["Gemfile","","Gemfile.html","","<p>source “rubygems.org”\n<p>gemspec\n<p>gem “minitest”, “~&gt; 5.0” gem “rspec-rails”, …\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>PATH\n\n<pre>remote: .\nspecs:\n  ruby-client (1.0.0)\n    oj (~&gt; 2.15)</pre>\n<p>GEM\n"],["LICENSE","","LICENSE.html","","\n<pre>         Apache License\n   Version 2.0, January 2004\nhttp://www.apache.org/licenses/</pre>\n<p>TERMS AND CONDITIONS …\n"],["Rakefile","","Rakefile.html","","<p># require “bundler/gem_tasks” require “rake/testtask”\n<p>Rake::TestTask.new do |t|\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">t</span>.<span class=\"ruby-identifier\">pattern</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["setup","","bin/setup.html","","<p>#!/usr/bin/env bash set -euo pipefail IFS=$&#39;nt&#39; set -vx\n<p>bundle install\n"],["readme","","readme_md.html","","<p>Nimiq Ruby RPC Client\n\n<blockquote><p>Ruby implementation of the Nimiq RPC client specs.\n</blockquote>\n<p>Info\n"]]}}