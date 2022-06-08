// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ClusterOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined';

export interface ClusterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ClusterOutlined: ClusterOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ClusterOutlinedSvg} />;

ClusterOutlined.displayName = 'ClusterOutlined';

export default FunctionalComponent;