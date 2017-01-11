var expect = require('chai').expect;
var Queue = require('../QueueBuiltWithStack');

describe('Queue', function() {
  var myQueue;

  beforeEach(function() {
    myQueue = new Queue;
  });

  it('should be a function', function() {
    expect(typeof Queue).to.equal('function');
  });

  it('should have properties: queue, size', function() {
    expect(myQueue).to.have.property('queue');
    expect(typeof myQueue.queue).to.equal('object');

    expect(myQueue).to.have.property('size');
  });

  it('should have methods: enqueue, dequeue, length', function() {
    expect(myQueue).to.have.property('enqueue');
    expect(myQueue).to.have.property('dequeue');
    expect(myQueue).to.have.property('length');
  });

  it('this.size should be 3 after enqueue 3 times', function() {
    expect(myQueue.size).to.equal(0);
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    expect(myQueue.length()).to.equal(3);
  });

  it('should be the size of 0 after dequeue', function() {
    myQueue.enqueue(1);
    expect(myQueue.dequeue()).to.equal(1);
    expect(myQueue.length()).to.equal(0);
    myQueue.enqueue(2);
    expect(myQueue.dequeue()).to.equal(2);
    expect(myQueue.length()).to.equal(0);
  });

  it('dequeue should return the first enqueue value', function() {
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    expect(myQueue.dequeue()).to.equal(1);
    expect(myQueue.dequeue()).to.equal(2);
    expect(myQueue.dequeue()).to.equal(3);
    myQueue.enqueue(4);
    expect(myQueue.dequeue()).to.equal(4);
  });
});