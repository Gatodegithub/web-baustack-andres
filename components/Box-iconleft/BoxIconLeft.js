import styles from "@components/Box-iconleft/Box.module.scss";

export default function BoxDescription({ icon, title, description }) {
  return (
    <div className={styles.boxIconLeft}>
      <div>
        <svg
          className={styles.iconLeft}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 103.000000 103.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)"
            fill="#e83e8c"
            stroke="none"
          >
            <path 
              d="M0 515 l0 -515 515 0 515 0 0 515 0 515 -515 0 -515 0 0 -515z m605
291 c68 -52 85 -136 42 -211 l-22 -39 46 -23 c47 -24 77 -62 64 -83 -5 -8 -17
-2 -39 19 -18 17 -48 36 -67 41 -46 14 -206 12 -249 -3 -52 -18 -80 -67 -80
-138 l0 -59 124 0 c132 0 156 -4 156 -26 0 -11 -30 -14 -160 -14 l-160 0 0 75
c0 42 6 90 14 108 15 38 66 84 102 93 l24 6 -25 42 c-29 50 -32 103 -9 153 18
36 65 77 99 86 42 12 105 -1 140 -27z m155 -415 c0 -24 19 -32 44 -19 26 14
44 -6 25 -28 -12 -15 -11 -19 9 -32 25 -16 30 -42 8 -42 -19 0 -29 -30 -15
-47 17 -20 -4 -41 -24 -24 -19 15 -44 5 -50 -20 -7 -25 -27 -25 -34 0 -6 22
-29 35 -38 21 -4 -6 -13 -10 -22 -10 -12 0 -14 7 -9 36 6 31 4 36 -13 41 -27
7 -27 30 0 38 18 6 20 12 14 41 -4 26 -3 34 9 34 8 0 17 -4 21 -10 9 -14 32
-1 38 21 7 25 37 25 37 0z"
            />
            <path
              d="M454 784 c-65 -32 -86 -127 -39 -183 14 -16 41 -35 60 -41 73 -24
155 34 155 111 0 101 -87 157 -176 113z"
            />
            <path
              d="M712 324 c-30 -21 -29 -59 3 -80 23 -15 27 -15 50 0 29 19 33 56 9
80 -19 20 -34 20 -62 0z"
            />
          </g>
        </svg>
      </div>
      <div className={styles.descrBlock}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
