// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightCircleOutlined';

export interface RightCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RightCircleOutlined: RightCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RightCircleOutlinedSvg} />;

RightCircleOutlined.displayName = 'RightCircleOutlined';

export default FunctionalComponent;