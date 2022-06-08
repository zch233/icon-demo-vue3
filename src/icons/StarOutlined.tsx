// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined';

export interface StarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const StarOutlined: StarOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={StarOutlinedSvg} />;

StarOutlined.displayName = 'StarOutlined';

export default FunctionalComponent;