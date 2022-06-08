// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RightSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightSquareOutlined';

export interface RightSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RightSquareOutlined: RightSquareOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RightSquareOutlinedSvg} />;

RightSquareOutlined.displayName = 'RightSquareOutlined';

export default RightSquareOutlined;