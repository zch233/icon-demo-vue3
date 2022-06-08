// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined';

export interface BackwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BackwardOutlined: BackwardOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BackwardOutlinedSvg} />;

BackwardOutlined.displayName = 'BackwardOutlined';

export default BackwardOutlined;