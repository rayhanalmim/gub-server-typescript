import java.util.*;

public class KindomConnectivity {

    private static final int MOD = 1000000000;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int m = scanner.nextInt();

        List<List<Integer>> graph = new ArrayList<>(n + 1);
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < m; i++) {
            int u = scanner.nextInt();
            int v = scanner.nextInt();
            graph.get(u).add(v);
        }

        if (detectCycle(graph, n)) {
            System.out.println("INFINITE PATHS");
        } else {
            System.out.println(countPaths(graph, n));
        }
    }

    private static boolean detectCycle(List<List<Integer>> graph, int n) {
        boolean[] visited = new boolean[n + 1];
        boolean[] recStack = new boolean[n + 1];

        for (int i = 1; i <= n; i++) {
            if (dfsCycleDetection(graph, i, visited, recStack)) {
                return true;
            }
        }
        return false;
    }

    private static boolean dfsCycleDetection(List<List<Integer>> graph, int node, boolean[] visited, boolean[] recStack) {
        if (recStack[node]) {
            return true;
        }
        if (visited[node]) {
            return false;
        }
        visited[node] = true;
        recStack[node] = true;
        for (int neighbor : graph.get(node)) {
            if (dfsCycleDetection(graph, neighbor, visited, recStack)) {
                return true;
            }
        }
        recStack[node] = false;
        return false;
    }

    private static int countPaths(List<List<Integer>> graph, int n) {
        int[] dp = new int[n + 1];
        dp[1] = 1;

        Queue<Integer> queue = new LinkedList<>();
        int[] inDegree = new int[n + 1];

        // Calculate in-degrees
        for (int i = 1; i <= n; i++) {
            for (int neighbor : graph.get(i)) {
                inDegree[neighbor]++;
            }
        }

        // Initialize the queue with nodes of in-degree 0
        for (int i = 1; i <= n; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }

        // Topological sort and count paths
        while (!queue.isEmpty()) {
            int node = queue.poll();
            for (int neighbor : graph.get(node)) {
                dp[neighbor] = (dp[neighbor] + dp[node]) % MOD;
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }

        return dp[n];
    }
}