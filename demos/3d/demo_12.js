tell("Demo 12 - arm");

var chain = new FIK.Chain3D();
var base = new FIK.Bone3D( new FIK.V3(0, 1, 0), new FIK.V3(15, 0, 0) );
chain.addBone(base);
// chain.setHingeBaseboneConstraint( 'global', new FIK.V3(0,1,0), 0, 0, new FIK.V3(1,0,0));
chain.setRotorBaseboneConstraint( 'global', FIK.X_AXE, 90);
chain.addConsecutiveHingedBone( defaultBoneDirection, defaultBoneLength, 'local', FIK.Y_AXE, 150, 0, FIK.Z_AXE );

solver.add( chain, target, true );