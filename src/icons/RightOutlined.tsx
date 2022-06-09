// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';

export interface RightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RightOutlined: RightOutlinedIconType = (props, context) => <Icon name='RightOutlined' {...{ ...props, ...context.attrs }} icon={RightOutlinedSvg} />;

RightOutlined.displayName = 'RightOutlined';

export default RightOutlined;