// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CompassOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompassOutlined';

export interface CompassOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CompassOutlined: CompassOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CompassOutlinedSvg} />;

CompassOutlined.displayName = 'CompassOutlined';

export default FunctionalComponent;