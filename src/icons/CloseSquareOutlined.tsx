// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloseSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseSquareOutlined';

export interface CloseSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloseSquareOutlined: CloseSquareOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CloseSquareOutlinedSvg} />;

CloseSquareOutlined.displayName = 'CloseSquareOutlined';

export default CloseSquareOutlined;