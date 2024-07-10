interface Entity {
  id?: number;
}

class InMemoryDB<T extends Entity> {
  private static instance: InMemoryDB<any>;
  private data: Map<number, T>;
  private index: number;

  private constructor() {
    this.data = new Map<number, T>();
    this.index = 0;
  }

  static getInstance<T extends Entity>(): InMemoryDB<T> {
    if (!InMemoryDB.instance) {
      InMemoryDB.instance = new InMemoryDB<T>();
    }
    return InMemoryDB.instance;
  }

  create(entity: T): T {
    this.index++;
    entity.id = this.index;
    this.data.set(entity.id, entity);

    return entity;
  }

  read(id: number): T | undefined {
    return this.data.get(id);
  }

  update(id: number, entity: T): T {
    if (this.data.has(id)) {
      this.data.set(id, entity);
    } else {
      throw new Error(`Entity with id ${id} not found`);
    }

    return entity;
  }

  delete(id: number): void {
    let sucess: boolean = this.data.delete(id);

    if (!sucess) {
      throw { message: "Not found", status: 404 };
    }
  }

  getAll(): T[] {
    return [...this.data.values()];
  }
}

export { InMemoryDB, Entity };
