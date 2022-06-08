// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BugOutlinedSvg from '@ant-design/icons-svg/lib/asn/BugOutlined';

export interface BugOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BugOutlined: BugOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BugOutlinedSvg} />;

BugOutlined.displayName = 'BugOutlined';

export default FunctionalComponent;