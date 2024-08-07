# Vagrantfile

Vagrant.configure("2") do |config|

  config.vm.box_check_update = false
  # Define the second VM
  config.vm.define :vm2 do |vm2|
    vm2.vm.box = "ubuntu/bionic64"
    vm2.vm.hostname = "vm2"
    vm2.vm.network :private_network, ip: "192.168.56.10"
    vm2.vm.synced_folder ".", "/vagrant"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
    # Provisioning for Node.js
    vm2.vm.provision "shell", inline: <<-SHELL
      curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
      sudo apt-get install -y nodejs
      sudo apt-get install -y build-essential
      cd /vagrant
      sudo npm install
      sudo npm run start:dev &

    SHELL
  end

  # Define the first VM
  config.vm.define :vm1 do |vm1|
    vm1.vm.box = "ubuntu/bionic64"
    vm1.vm.hostname = "vm1"
    vm1.vm.network :private_network, ip: "192.168.56.11"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
  end
end
