# Vagrantfile

Vagrant.configure("2") do |config|

  config.vm.box_check_update = false
  # Define the second VM
  config.vm.define :vm2 do |vm2|
    vm2.vm.box = "hashicorp/bionic64"
    vm2.vm.hostname = "vm2"
    vm2.vm.network :private_network, ip: "192.168.56.10"
    vm2.vm.synced_folder ".", "/vagrant_data"
    vm2.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.memory = "1024"
    end
  end

  # Define the first VM
  config.vm.define :vm1 do |vm1|
    vm1.vm.box = "hashicorp/bionic64"
    vm1.vm.hostname = "vm1"
    vm1.vm.network :private_network, ip: "192.168.56.11"
    vm1.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.memory = "1024"
    end

    vm1.vm.synced_folder "./vagrant_vm1_data", "/vagrant_data"
    vm1.vm.provision "shell", inline: <<-SHELL
      apt-get update
      apt install software-properties-common
      add-apt-repository --yes --update ppa:ansible/ansible
      apt install -y ansible
    SHELL
  end
end
