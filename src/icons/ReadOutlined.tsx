// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ReadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined';

export interface ReadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ReadOutlined: ReadOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ReadOutlinedSvg} />;

ReadOutlined.displayName = 'ReadOutlined';

export default ReadOutlined;