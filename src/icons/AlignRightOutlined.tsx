// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AlignRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutlined';

export interface AlignRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AlignRightOutlined: AlignRightOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AlignRightOutlinedSvg} />;

AlignRightOutlined.displayName = 'AlignRightOutlined';

export default FunctionalComponent;