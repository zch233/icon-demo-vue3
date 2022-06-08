// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined';

export interface BellOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BellOutlined: BellOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BellOutlinedSvg} />;

BellOutlined.displayName = 'BellOutlined';

export default FunctionalComponent;