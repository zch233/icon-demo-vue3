// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InsertRowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowLeftOutlined';

export interface InsertRowLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InsertRowLeftOutlined: InsertRowLeftOutlinedIconType = (props, context) => <Icon name='InsertRowLeftOutlined' {...{ ...props, ...context.attrs }} icon={InsertRowLeftOutlinedSvg} />;

InsertRowLeftOutlined.displayName = 'InsertRowLeftOutlined';

export default InsertRowLeftOutlined;