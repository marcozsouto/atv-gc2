interface Entity {
    id: string;
}

class InMemoryDB<T extends Entity> {
private static instance: InMemoryDB<any>;
private data: Map<string, T>;

private constructor() {
    this.data = new Map<string, T>();
}

static getInstance<T extends Entity>(): InMemoryDB<T> {
    if (!InMemoryDB.instance) {
    InMemoryDB.instance = new InMemoryDB<T>();
    }
    return InMemoryDB.instance;
}

create(entity: T): void {
    this.data.set(entity.id, entity);
}

read(id: string): T | undefined {
    return this.data.get(id);
}

update(id: string, entity: T): void {
    if (this.data.has(id)) {
    this.data.set(id, entity);
    } else {
    throw new Error(`Entity with id ${id} not found`);
    }
}

delete(id: string): void {
    this.data.delete(id);
}

getAll(): T[] {
    return [...this.data.values()];
}
}

export { InMemoryDB, Entity };
